/** @type {import('next').NextConfig} */

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')


module.exports = {

  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  assetPrefix: "/windicsswithnextjs",
  basePath: "/windicsswithnextjs",
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
}