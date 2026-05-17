import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/pae",
        destination: "/pae/index.html",
      },
    ];
  },
};

export default nextConfig;
