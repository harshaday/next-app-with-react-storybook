module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config
  },
  images: {
    domains: ['via.placeholder.com','picsum.photos','source.unsplash.com'],
  },
};
