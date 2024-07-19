/** @type {import('next').NextConfig} */

/*const isProd = process.env.NODE_ENV === 'production';*/

const nextConfig = {
  output: 'export',
  /*basePath: isProd ? '/public' : '', // Adjust according to your deployment setup */
  basePath: 'public', // Adjust according to your deployment setup
  assetPrefix: '/Pages/', // Adjust according to your deployment setup
};

module.exports = nextConfig;
