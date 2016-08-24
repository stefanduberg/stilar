'use strict'

var makeComponentClassName = require('./makeComponentClassName.js')
var clone = require('clone')

function Component(options) {
  const {registry} = options

  return function (componentName, styles) {
    registry.addComponent(componentName, clone(styles))

    return Object.keys(styles)
      .reduce(function (classes, styleName) {
        const className = makeComponentClassName(componentName, styleName)
        classes[styleName] = className
        return classes
      }, {})
  }
}

module.exports = Component
