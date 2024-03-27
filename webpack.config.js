const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // webpack 최초 진입점(엔트리 포인트) 파일 경로 설정
  output: {
    // webpack을 실행한 후의 결과물의 이름/경로 등을 설정
    publicPath: "/",
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 번들링 파일을 주입하여 번들링 폴더로 복사할 대상 HTML 파일을 설정
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  devServer: {
    // webpack-dev-server 옵션을 설정
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true, // 404 페이지 대신 index.html로 이동
    hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신
    port: 3000,
    open: true,
  },
  performance: {
    hints: false,
  },
  resolve: {
    // resolve: import를 할 때 확장자를 생략할 수 있음
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 해당 파일명으로 끝나면 babel-loader가 처리
        exclude: /node_modules/, // node_modules는 대상에서 제외
        loader: "babel-loader", // 바벨 로더 추가
      },
    ],
  },
};
