import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/cyber-safety-platform' : '',
  assetPrefix: isGithubPages ? '/cyber-safety-platform/' : '',
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
