/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "ds.rokomari.store",
      },
      {
        hostname: "s3-ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
