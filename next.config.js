const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/.well-known/:path*',
      }
    ]
  },
  // Ensure proper handling of static files
  output: 'standalone',
  trailingSlash: true,
  distDir: 'build',
};

module.exports = withNextIntl(nextConfig); 