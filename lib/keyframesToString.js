'use strict'

var prefix = require('./prefix.js')

function keyframesToString(props) {
  var keyframes = props.keyframes

  return Object.keys(keyframes)
    .reduce(function (acc, name) {
      var values1 = ['@-webkit-keyframes ' + name + '{']
      var values2 = ['@keyframes ' + name + '{']
      Object.keys(keyframes[name]).forEach(function (setName) {
        values1.push(setName + '{')
        values2.push(setName + '{')
        Object.keys(keyframes[name][setName]).forEach(function (property) {
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
