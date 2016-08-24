'use strict'

function makeComponentClassName(componentName, styleName) {
  if (styleName === componentName) {
    return componentName
  } else {
    return componentName + '-' + styleName
  }
}

module.exports = makeComponentClassName
