import runtimeCaching from 'next-pwa/cache.js';
import PWA from 'next-pwa';
import bundleAnalyzer from '@next/bundle-analyzer';

const withPWA = () => {
	PWA({
		dest: 'public',
		runtimeCaching,
		disable: process.env.NODE_ENV === "development",
	});
}

const withBundleAnalyzer = () => {
	bundleAnalyzer({
		enabled: process.env.ANALYZE === 'true',
	});
}

const plugins = [withPWA, withBundleAnalyzer]

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["image.tmdb.org"],
	},
	experimental: {
		legacyBrowsers: false,
		browsersListForSwc: true,
	},
}

export default plugins.reduce((config, plugin) => plugin(config), nextConfig);
