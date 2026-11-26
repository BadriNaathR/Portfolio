import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: [
          {
            loader: "@tailwindcss/turbopack",
            options: {
              base: path.resolve(__dirname),
            },
          },
        ],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
