'use strict'

var makeComponentClassName = require('./makeComponentClassName.js')
var keyframesToString = require('./keyframesToString.js')
var componentsToString = require('./componentsToString.js')

function Stilar(options) {
  this.registry = {
    components: {},
    keyframes: {}
  }
  this.options = options || {}
}

Stilar.prototype.component = function component(componentName, styles) {
  this.registry.components[componentName] = styles

  return Object.keys(styles)
    .reduce(function (classes, styleName) {
      var className = makeComponentClassName(componentName, styleName)
      classes[styleName] = className
      return classes
    }, {})
}

Stilar.prototype.keyframes = function keyframes(name, styles) {
  this.registry.keyframes[name] = styles
}

Stilar.prototype.toStyleString = function toStyleString() {
  var keyframes = keyframesToString({
    keyframes: this.registry.keyframes,
    pseudoWhitelist: this.options.pseudoWhitelist
  })

  var components = componentsToString({
    components: this.registry.components,
    pseudoWhitelist: this.options.pseudoWhitelist
  })

  return keyframes + components
}

module.exports = Stilar
