'use strict'
const utils = require('./utils')
const config = require('../config')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: true
  }),
  cssSourceMap: false,
  cacheBusting: config.local.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
