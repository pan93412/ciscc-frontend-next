const strapiAdminUrl = process.env.STRAPI_ADMIN;

if (!strapiAdminUrl) {
  throw new Error("You should specify STRAPI_ADMIN environment variable.");
}

exports.default = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: strapiAdminUrl,
        permanent: false,
      },
    ]
  },
};
