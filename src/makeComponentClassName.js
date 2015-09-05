'use strict'

function makeComponentClassName(componentName, key) {
  if (key === componentName) {
    return componentName
  } else {
    return `${componentName}-${key}`
  }
}

module.exports = makeComponentClassName
