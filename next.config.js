const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    runtimeCaching
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

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

module.exports = () => {
    const plugins = [withPWA, withBundleAnalyzer];

    return plugins.reduce((config, plugin) => plugin(config), nextConfig);
}
