'use strict'

var Component = require('./Component.js')
var Registry = require('./Registry.js')
var Keyframes = require('./Keyframes.js')

function Stilar(options) {
  const registry = Registry({...options})

  return {
    component: Component({...options, registry}),
    keyframes: Keyframes({...options, registry}),
    toStyleString: registry.toStyleString
  }
}

module.exports = Stilar
