/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
    compiler: {
      styledComponents: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.graphassets.com',
          port: '',
        },
      ],
    },
  };
  module.exports = nextConfig;