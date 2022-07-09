// FIXME: rewrites failing
module.exports = {
  assetPrefix: "",
  rewrites: async function () {
    return [
      {
        source: "/talks/concurrent-react-3d",
        destination: "/talks/concurrent-react-3d/index.html",
      },
      {
        source: "/talks/concurrent-react-3d/:path*",
        destination: "/talks/concurrent-react-3d/:path*",
      },
    ];
  },
};
