/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['image.tmdb.org']
    },
    experimental: {
        images: {
            allowFutureImage: true
        }
    }
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })
//
// module.exports = withBundleAnalyzer({})
