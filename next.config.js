// import { withContentlayer } from "next-contentlayer";
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  swcMinify: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "unfollow.top",
    ],
  },
};

// export default withContentlayer(nextConfig)
module.exports = withContentlayer(nextConfig);
