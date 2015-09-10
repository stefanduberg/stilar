'use strict'

const makeComponentClassName = require('./makeComponentClassName.js')
const clone = require('clone')

function Component(options) {
  const {registry} = options

  return (componentName, styles) => {
    const classes = {}

    Object.keys(styles).forEach((styleName) => {
      classes[styleName] = makeComponentClassName(componentName, styleName)
    })

    registry.addComponent(componentName, clone(styles))

    return classes
  }
}

module.exports = Component
