

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['image.tmdb.org']
    },
    experimental: {
        legacyBrowsers: false,
        browsersListForSwc: true
    }
};

module.exports = withPlugins([[withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true'
}],[withPWA, {
    pwa: {
        dest: 'public',
        runtimeCaching,
        disable: process.env.NODE_ENV === 'development'
    }
}]], nextConfig);
