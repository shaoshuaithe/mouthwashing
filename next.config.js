const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  swcMinify: true,
  images: {
    domains: [
      "mouthwashinggame.help",
    ],
  },
};

module.exports = withContentlayer(nextConfig);
