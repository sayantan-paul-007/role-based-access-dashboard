import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  images: {
    domains: ['i.pravatar.cc'],
  },
};

export default nextConfig;
