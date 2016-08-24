'use strict'

var makeComponentClassName = require('./makeComponentClassName.js')
var clone = require('clone')

function Component(options) {
  const {registry} = options

  return (componentName, styles) => {
    registry.addComponent(componentName, clone(styles))

    return Object.keys(styles)
      .reduce((classes, styleName) => {
        const className = makeComponentClassName(componentName, styleName)
        return Object.assign(classes, {[styleName]: className})
      }, {})
  }
}

module.exports = Component
