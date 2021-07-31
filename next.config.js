const strapiAdminUrl = process.env.STRAPI_ADMIN;

exports.default = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: strapiAdminUrl ? strapiAdminUrl : "/",
        permanent: false,
      },
    ]
  },
};
