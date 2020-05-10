const path = require('path')
const resolve = name => path.resolve(__dirname, name);
console.log('1:',resolve(__dirname))
console.log('2:',resolve('src/api'))
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
  }
}