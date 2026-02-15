import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bevsoc-website.vercel.app" }],
        destination: "https://www.unswbevsoc.org/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "unswbevsoc.vercel.app" }],
        destination: "https://www.unswbevsoc.org/:path*",
        permanent: true,
      },
    ];
  },
};
