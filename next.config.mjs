/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/portfolio',
  // assetPrefix: '/portfolio/'
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
