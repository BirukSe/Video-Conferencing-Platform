import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // No need for experimental.middleware here
  webpack(config, { isServer }) {
    if (!isServer) {
      // Required for Clerk's client-side usage in Next.js
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
