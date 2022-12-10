const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  runtimeCaching,
  dist: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const plugins = [withPWA, withBundleAnalyzer];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
  experimental: {
    legacyBrowsers: false,
  },
};

module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig);
