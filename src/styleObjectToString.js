'use strict'

var prefix = require('./prefix.js')

function styleObjectToString(selector, styles) {
  const head = [`${selector}{`]
  const tail = '}'

  return Object.keys(styles)
    .reduce(function (acc, key) {
      let value = styles[key]

      if (typeof value === 'number') {
        value = value.toString()
      }

      if (typeof value !== 'string') {
        return acc
      }

      return acc.concat(prefix(key, value))
    }, head)
    .concat(tail)
    .join('')
}

module.exports = styleObjectToString
