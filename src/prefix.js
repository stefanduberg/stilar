'use strict'

import capitalize from 'capitalize'
import hyphenateStyleName from 'hyphenate-style-name'
import propertyPrefixes from './propertyPrefixes.js'
import valuePrefixes from './valuePrefixes.js'

export default (property, value) => {
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
