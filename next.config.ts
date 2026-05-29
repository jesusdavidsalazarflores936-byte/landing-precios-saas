const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? 'https://landing-precios-saas.vercel.app' : undefined,

  turbopack: {
    root: process.cwd(),
  },
};

module.exports = nextConfig;