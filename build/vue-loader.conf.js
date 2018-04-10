'use strict'
const utils = require('./utils')
const config = require('../config')
const isExtract = process.env.NODE_ENV && process.env.NODE_ENV !== 'testing' // 在测试环境下不需要提取css

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: isExtract
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
