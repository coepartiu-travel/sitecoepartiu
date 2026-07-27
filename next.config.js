/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // optimizeCss removido para evitar erro com critters
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
