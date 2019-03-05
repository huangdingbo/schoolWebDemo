// let base_url = {
//   online: "",
//   // online: "http://183.222.190.198:9997/vias/api",
//   // online: "http://192.168.1.28:81/vias/api",
//   localhost: " http://192.168.11.6"
// };
module.exports = {
  // lintOnSave: undefined,
    lintOnSave: false,
  publicPath: '/web/dist/',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  devServer: {
    https: false,
    proxy: {
      "/api": {
        target: "http://huangdingbo.work/school/api", // 需要请求的地址
        changeOrigin: true, // 是否跨域
        ws: true, // 是否启用websockets
        pathRewrite: {
          "^/api/": "/" // 替换target中的请求地址
        }
      }
    }
  }
};
