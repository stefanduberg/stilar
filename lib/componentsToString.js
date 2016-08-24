'use strict'

var makeComponentClassName = require('./makeComponentClassName.js')
var styleObjectToString = require('./styleObjectToString.js')

function componentsToString(props) {
  var components = props.components
  var pseudoWhitelist = props.pseudoWhitelist
  var result = []

  Object.keys(components).forEach(function (componentName) {
    var component = components[componentName]

    Object.keys(component).forEach(function (styleName) {
      var styles = component[styleName]
      var cssClass = '.' + makeComponentClassName(componentName, styleName)
      result.push(styleObjectToString(cssClass, styles))

      Object.keys(styles).forEach(function (key) {
        var value = styles[key]

        if (key.indexOf('@media') === 0) {
          result = result.concat(
            key + '{',
            styleObjectToString(cssClass, value),
            '}'
          )
        }

        if (key.indexOf(':') === 0) {
          if (pseudoWhitelist && pseudoWhitelist.indexOf(key) === -1) {
            return
          }
          result.push(
            styleObjectToString(cssClass + key, value)
          )
        }
      })
    })
  })

  return result.join('')
}

module.exports = componentsToString
