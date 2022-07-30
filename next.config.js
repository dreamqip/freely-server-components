/**
 * @type {import('next').NextConfig}
 **/

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['image.tmdb.org']
    }
};

module.exports = withPlugins([[withPWA, {
    pwa: {
        dest: 'public',
        runtimeCaching,
        disable: process.env.NODE_ENV === 'development'
    }
}], [withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true'
}]], nextConfig);
