/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com', 'unsplash.com']
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;