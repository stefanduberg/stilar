'use strict'

const prefix = require('./prefix.js')

function styleObjectToString(selector, styles) {
  const head = [`${selector}{`]
  const tail = '}'

  return Object.keys(styles)
    .reduce((acc, key) => {
      const value = styles[key]
      if (typeof value !== 'string') {
        return acc
      }
      return acc.concat(prefix(key, value))
    }, head)
    .concat(tail)
    .join('')
}

module.exports = styleObjectToString
