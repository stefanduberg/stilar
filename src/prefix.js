'use strict'

const capitalize = require('lodash/string/capitalize')
const hyphenateStyleName = require('hyphenate-style-name')
const propertyPrefixes = require('./propertyPrefixes.js')
const valuePrefixes = require('./valuePrefixes.js')

function prefix(property, value) {
  const styles = []

  if (propertyPrefixes[property]) {
    propertyPrefixes[property].forEach((vendor) => {
      if (vendor !== 'ms') {
        vendor = capitalize(vendor)
      }
      const styleName = hyphenateStyleName(`${vendor}${capitalize(property)}`)
      const result = `${styleName}:${value};`
      styles.push(result)
    })
  }

  if (valuePrefixes[value]) {
    valuePrefixes[value].forEach((vendor) => {
      styles.push(`${property}:-${vendor}-${value};`)
    })
  }

  styles.push(`${hyphenateStyleName(property)}:${value};`)

  return styles.join('')
}

module.exports = prefix
