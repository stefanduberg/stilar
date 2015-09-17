'use strict'

export default (componentName, styleName) => {
  if (styleName === componentName) {
    return componentName
  } else {
    return `${componentName}-${styleName}`
  }
}
