import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('http://prueba-tecnica-api-tienda-moviles.onrender.com/')],
  }
};

export default nextConfig;
