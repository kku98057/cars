/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "theableapp.kr",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.discordapp.net",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.hdr$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next", // 파일을 저장할 경로
              name: "static/media/[name].[hash].[ext]", // 파일 이름 형식npm r
            },
          },
        ],
      }
    );

    return config;
  },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // }
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "http://localhost:3000/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
