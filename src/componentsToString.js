'use strict'

import makeComponentClassName from './makeComponentClassName.js'
import styleObjectToString from './styleObjectToString.js'

export default (props) => {
  const {components, pseudoWhitelist} = props
  let result = []

  Object.keys(components).forEach((componentName) => {
    const component = components[componentName]

    Object.keys(component).forEach((styleName) => {
      const styles = component[styleName]
      const cssClass = `.${makeComponentClassName(componentName, styleName)}`
      result.push(styleObjectToString(cssClass, styles))

      Object.keys(styles).forEach((key) => {
        const value = styles[key]

        if (key.indexOf('@media') === 0) {
          result = result.concat(
            `${key}{`,
            styleObjectToString(cssClass, value),
            '}'
          )
        }

        if (key.indexOf(':') === 0) {
          if (pseudoWhitelist && pseudoWhitelist.indexOf(key) === -1) {
            return
          }
          result.push(
            styleObjectToString(`${cssClass}${key}`, value)
          )
        }
      })
    })
  })

  return result.join('')
}
