/** @type {import('next').NextConfig} */

// TODO change when uploading to site
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
