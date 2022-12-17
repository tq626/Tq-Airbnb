const path = require('path')

const CracoLessPlugin = require('craco-less')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // 配置less
  plugins:[
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyvars: {},
            javascriptEnabled: true,
          }
        }
      }
    }
  ],
  // 配置webpack
  webpack: {
    alias: {
      "@": resolve("src"),   //必须放绝对路径
      // '@mui/styled-engine': '@mui/styled-engine-sc',
    }
  }
}