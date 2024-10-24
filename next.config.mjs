/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {unoptimized: true},
    async rewrites() {
      return [
        {
          source: '/assets/:path*',
          destination: '/src/app/assets/:path*',
        },
      ]
    }
  }
  
export default nextConfig;