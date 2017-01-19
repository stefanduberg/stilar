'use strict'

var prefix = require('./prefix.js')

function styleObjectToString(selector, styles) {
  var head = [selector + '{']
  var tail = '}'

  return Object.keys(styles)
    .reduce(function (acc, key) {
      var value = styles[key]

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
