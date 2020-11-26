const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 默认配置
module.exports = {
  // 上下文 项目
  //   context: process.cwd(), // 默认是项目根目录 process.cwd()
  // 入口文件 1-字符串 2-数组 3-对象
  entry: "./src/index.js",
  //  entry: ["./src/index.js", "./src/other.js"],

  // 多入口，对应的就要有多出口，另外多出口不能指定名称
  mode: 'development',
  // entry: {
  //   // index: "./src/index.js",
  //   // other: "./src/other.js",
  // },
  output: {
    // 构建的资源路径
    path: path.resolve(__dirname, "./dist"),
    // 构建的文件名称
    filename: "[name].js",
  },
  devServer: {
    publicPath: "./dist",
    contentBase: "./dist",
    open: true,
    port: 8080
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      //选择html模板
      title: "首页",
      template: "./src/index.html",
      filename: "index.html",
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  // rules: {
  //   test: /\.(png | jpe?g | gif)/,
  //   use: {
  //     loader: 'file-loader',
  //     url-loader 支持 limit 即文件大小
  //     options: {
  //       name: "[name]_[hash:6].[ext]",
  //       outputPath: 'images'
  //     }
  //   }
  // }
};
