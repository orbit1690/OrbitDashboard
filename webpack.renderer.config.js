const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

// Used to load CSS files
rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

// Use to load assets files: .png, .gif, .jpg, .jpeg
rules.push({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
