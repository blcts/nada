/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'static.tvmaze.com',
        pathname: '/uploads/images/**',
      },
    ],
  },
}

module.exports = nextConfig
