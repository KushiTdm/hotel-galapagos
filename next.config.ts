import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:locale(fr|es|de|en)/:path*",
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/:locale(fr|es|de|en)",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
