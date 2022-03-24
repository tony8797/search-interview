const withImages = require('next-images');

module.exports = withImages({
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    formats: ['image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    domains: ['cdn-static.tibame.com'],
  },
});
