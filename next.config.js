module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://chakkun1121.github.io/zoom-word/:path*",
        permanent: true,
      },
    ];
  },
};
