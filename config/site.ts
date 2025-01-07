import { SiteConfig } from "@/types/siteConfig"

const baseSiteConfig = {
  name: "mouthwashing",
  description:
    "Explore Mouthwashing, a unique narrative game where your choices shape the story. Uncover mysteries, interact with AI characters, and experience dynamic storytelling.",
  url: "https://mouthwashinggame.help/",
  ogImage: "https://mouthwashinggame.help/og.jpg",
  metadataBase: new URL("https://mouthwashinggame.help/"),
  keywords: ["mouthwashing", "mouthwashing anya", "mouthwashing curly", "download mouthwashing"],
  authors: [
    {
      name: "shuai",
      url: "",
    }
  ],
  creator: '@shuai',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  links: {
    twitter: "",
    github: "",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
