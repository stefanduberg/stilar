'use strict'

var capitalize = require('capitalize')
var hyphenateStyleName = require('hyphenate-style-name')
var propertyPrefixes = require('./propertyPrefixes.js')
var valuePrefixes = require('./valuePrefixes.js')

function prefix(property, value) {
  var styles = []

  if (propertyPrefixes[property]) {
    propertyPrefixes[property].forEach(function (vendor) {
      if (vendor !== 'ms') {
        vendor = capitalize(vendor)
      }
      var styleName = hyphenateStyleName(vendor + capitalize(property))
      var result = styleName + ':' + value + ';'
      styles.push(result)
    })
  }

  if (valuePrefixes[value]) {
    valuePrefixes[value].forEach(function (vendor) {
      styles.push(property + ':-' + vendor + '-' + value + ';')
    })
  }

  styles.push(hyphenateStyleName(property) + ':' + value + ';')

  return styles.join('')
}

module.exports = prefix
