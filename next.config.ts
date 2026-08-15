import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/weloveluka", destination: "/weloveluka/index.html" }];
  },
};

export default nextConfig;
