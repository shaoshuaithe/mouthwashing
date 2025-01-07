import { ONE_DAY } from "@/lib/constants";
import prisma from "@/lib/prisma";
import { UserInfo } from "@/types/user";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { Account, NextAuthOptions, TokenSet } from "next-auth";
import { JWT } from "next-auth/jwt";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import redis from "./redis";


const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "", // Mailgun API Key
  url: "https://api.mailgun.net" // Mailgun URL
});

interface ExtendedToken extends TokenSet {
  accessToken?: string;
  userId?: string;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
  adapter: PrismaAdapter(prisma), // 在此添加适配器
  providers: [
    GithubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
      httpOptions: {
        timeout: 50000,
      },
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
    }),
    EmailProvider({
      server: process.env.MAILGUN_SMTP_SERVER, // Not needed but can be configured if required
      from: process.env.MAILGUN_FROM_EMAIL,    // Email sender address
      sendVerificationRequest: async ({
        identifier: email,
        url,
        provider,
      }) => {
        const { host } = new URL(url);
        const mailData = {
          from: provider.from,
          to: email,
          subject: `Sign in to ${host}`,
          text: `Sign in to ${host}\n${url}\n\n`,
          html: `<p>Sign in to <strong>${host}</strong></p><p><a href="${url}">Click here to sign in</a></p>`,
        };

        try {
          if (!process.env.MAILGUN_DOMAIN) {
            throw new Error("MAILGUN_DOMAIN is not defined in the environment variables.");
          } 
          await mg.messages.create(process.env.MAILGUN_DOMAIN, mailData);          
          console.log("Verification email sent via Mailgun.");
        } catch (error) {
          console.error("Error sending verification email:", error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // 登录(account仅登录那一次有值)
      console.log("JWT callback invoked with token:", token);
      console.log("Account data received:", account);

      if (account) {
        token.accessToken = account.access_token;
        console.log("Access token set:", token.accessToken);

        // 存储访问令牌
        try {
          await storeAccessToken(account.access_token || "", token.sub);
        } catch (error) {
          console.error("Error storing access token:", error);
        }

        // 用户信息存入数据库
        try {
          const userInfo = await upsertUserAndGetInfo(token, account);
          if (!userInfo || !userInfo.userId) {
            throw new Error("User information could not be saved or retrieved.");
          }
          const fullUserInfo = {
            userId: userInfo.userId,
            username: userInfo.username,
            avatar: userInfo.avatar,
            email: userInfo.email,
            platform: userInfo.platform,
            role: 0,
            accessToken: account.access_token,
          };
          console.log("User information:", fullUserInfo);
          return fullUserInfo;
        } catch (error) {
          console.error("Error upserting user:", error);
        }
      }
      return token as any;
    },
    async session({ session, token }) {
      console.log("Session callback invoked with session:", session);
      console.log("Token received in session callback:", token);

      // Append user information to the session
      if (token && token.userId) {
        session.user = await getSessionUser(token);
        console.log("Session user information added:", session.user);
      }

      return session;
    },
  },
};

async function storeAccessToken(accessToken: string, sub?: string) {
  if (!accessToken || !sub) return;
  const expire = ONE_DAY * 30; // The number of seconds in 30 days

  try {
    console.log(`Storing access token for sub: ${sub}`);
    await redis.set(accessToken, sub, { ex: expire });
    console.log("Access token stored successfully.");
  } catch (error) {
    console.error("Error storing access token in Redis:", error);
  }
}

async function upsertUserAndGetInfo(token: JWT, account: Account) {
  try {
    const user = await upsertUser(token, account.provider);
    if (!user || !user.userId) return null;
    console.log("User upserted or retrieved:", user);

    return {
      ...user,
    };
  } catch (error) {
    console.error("Error in upsertUserAndGetInfo:", error);
  }
}

async function upsertUser(token: JWT, provider: string) {
  if (!token.sub) {
    throw new Error("Token sub is undefined.");
  }
  console.log(`Upserting user with provider: ${provider}`);

  const userData = {
    userId: token.sub,
    username: token.name,
    avatar: token.picture,
    email: token.email,
    platform: provider,
  };

  try {
    const user = await prisma.user.upsert({
      where: { userId: token.sub },
      update: userData,
      create: { ...userData, role: 0 },
    });
    console.log("User upserted successfully:", user);
    return user || null;
  } catch (error) {
    console.error("Error upserting user in Prisma:", error);
    return null;
  }
}

async function getSessionUser(token: ExtendedToken): Promise<UserInfo> {
  try {
    const userInfo: UserInfo = {
      userId: token.userId || "", // 确保 userId 不会是 undefined
      username: token.username as string, // 假设 username 不会是 undefined
      avatar: token.avatar as string, // avatar 是可选的，所以不用担心
      email: token.email as string, // 假设 email 不会是 undefined
      platform: token.platform as string, // 假设 platform 不会是 undefined
      role: 0,
      accessToken: token.accessToken,
    };
    console.log("Session user retrieved:", userInfo);
    return userInfo;
  } catch (error) {
    console.error("Error retrieving session user:", error);
    return {} as UserInfo;
  }
}

