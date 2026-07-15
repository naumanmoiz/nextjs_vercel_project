import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow the dev server's HMR/websocket resources to be requested from these
  // origins. Without this, Next.js 16 blocks cross-origin /_next/webpack-hmr
  // requests, which breaks Fast Refresh and can cause the page to reload-loop.
  allowedDevOrigins: [
    'ubuntudev.thec.inhome',
    'ubuntuvm',
    '10.172.40.30',
    'localhost',
  ],
};

export default nextConfig;
