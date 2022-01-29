module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  //   resolve: {
  //     fallback: {
  //       util: require.resolve("util/"),
  //       "path": require.resolve("path-browserify")
  //     }
  // }
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "asset": require.resolve("assert/"),
      "constants": require.resolve("constants-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "vm": require.resolve("vm-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "url": require.resolve("url/"),
      "zlib": require.resolve("browserify-zlib"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http")
    }
  },
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};


