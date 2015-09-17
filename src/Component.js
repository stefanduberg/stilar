'use strict'

import makeComponentClassName from './makeComponentClassName.js'
import clone from 'clone'

export default (options) => {
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
