// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          port: "1338",
          pathname: "/uploads/**",
        },
      ],
    },
    productionBrowserSourceMaps: true,
    webpack(config, { dev, isServer }) {
      // Enable source maps in development for both client and server
      if (dev) {
        if (isServer) {
          config.devtool = 'source-map'; // Server-side
        } else {
          config.devtool = 'eval-source-map'; // Client-side (browser), Next.js default
        }
      }
      return config;
    }, 
    output: "standalone",
    env: {
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  images: {
    domains: ['elg-design-admin.onrender.com'],
  },  
  };
  
  export default nextConfig;