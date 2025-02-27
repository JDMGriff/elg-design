import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1338",
                pathname: "/uploads/**",
            },
            {
                protocol: "https",
                hostname: "**.cyclic.app",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
