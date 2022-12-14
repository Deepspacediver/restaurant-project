const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
  mode: "development",
  entry: './src/index.js',
   plugins: [
    new HtmlWebpackPlugin({
        title:"Output Management",
    }),
  ], 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};