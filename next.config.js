/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/app', // Adjust according to your deployment setup
  assetPrefix: '/app/', // Adjust according to your deployment setup
  images: {
    loader: 'default',
    path: '/public/',
  },
};

module.exports = nextConfig;
