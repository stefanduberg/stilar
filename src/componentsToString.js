'use strict'

var makeComponentClassName = require('./makeComponentClassName.js')
var styleObjectToString = require('./styleObjectToString.js')

function componentsToString(props) {
  const {components, pseudoWhitelist} = props
  let result = []

  Object.keys(components).forEach(function (componentName) {
    const component = components[componentName]

    Object.keys(component).forEach(function (styleName) {
      const styles = component[styleName]
      const cssClass = `.${makeComponentClassName(componentName, styleName)}`
      result.push(styleObjectToString(cssClass, styles))

      Object.keys(styles).forEach(function (key) {
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

module.exports = componentsToString
