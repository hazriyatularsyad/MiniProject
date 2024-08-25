/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.pexels.com',
        protocol: 'https',
        port:'8000'
      },
    ],
  },
};

module.exports = nextConfig
