/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/My-Personal-Website',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
