exports.default = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://strapi.ciscc.pan93.tk/admin',
        permanent: false,
      },
    ]
  },
};
