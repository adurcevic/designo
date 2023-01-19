// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dgofh9c7t/**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

// module.exports = nextConfig;
