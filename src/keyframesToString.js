'use strict'

const prefix = require('./prefix.js')

function keyframesToString(props) {
  const {keyframes} = props

  return Object.keys(keyframes)
    .reduce((acc, name) => {
      const values1 = [`@-webkit-keyframes ${name} {`]
      const values2 = [`@keyframes ${name} {`]
      Object.keys(keyframes[name]).forEach((setName) => {
        values1.push(`${setName}{`)
        values2.push(`${setName}{`)
        Object.keys(keyframes[name][setName]).forEach((property) => {
          values1.push(prefix(property, keyframes[name][setName][property]))
          values2.push(prefix(property, keyframes[name][setName][property]))
        })
        values1.push('}')
        values2.push('}')
      })
      values1.push('}')
      values2.push('}')

      return acc.concat(values1, values2)
    }, [])
    .join('')
}

module.exports = keyframesToString
