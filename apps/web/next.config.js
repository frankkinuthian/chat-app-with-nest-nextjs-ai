/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const apiUrl = process.env.API_URL;
    
    // Only add rewrite if API_URL is defined
    if (!apiUrl) {
      return [];
    }
    
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/:path*`,
      },
    ];
  }
};

export default nextConfig;
