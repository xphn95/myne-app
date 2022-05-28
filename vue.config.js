const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mncma-xphn95.vercel.app',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/img': {
        target: 'http://p1.music.126.net',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/img': ''
        }
      }
    }
  }
})
