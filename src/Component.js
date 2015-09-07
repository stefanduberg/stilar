'use strict'

const makeComponentClassName = require('./makeComponentClassName.js')
const cloneDeep = require('lodash/lang/cloneDeep')

function Component(options) {
  const {registry} = options

  return (componentName, styles) => {
    const classes = {}

    Object.keys(styles).forEach((styleName) => {
      classes[styleName] = makeComponentClassName(componentName, styleName)
    })

    registry.addComponent(componentName, cloneDeep(styles))

    return classes
  }
}

module.exports = Component
