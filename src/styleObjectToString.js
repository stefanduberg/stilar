'use strict'

import prefix from './prefix.js'

export default (selector, styles) => {
  const head = [`${selector}{`]
  const tail = '}'

  return Object.keys(styles)
    .reduce((acc, key) => {
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
