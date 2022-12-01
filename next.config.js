/** @type {import('next').NextConfig} */
const withModernizr = require('next-plugin-modernizr');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withModernizr(nextConfig)