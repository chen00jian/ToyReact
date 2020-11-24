module.exports = {
  mode: "development",
  entry: {
    main: "./main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "@babel/preset-env" ],
            // plugins: [ "@babel/plugin-transform-react-jsx" ]
            // React.createElement 重命名 h
            plugins: [ [ "@babel/plugin-transform-react-jsx", { pragma: "h" } ] ]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
}