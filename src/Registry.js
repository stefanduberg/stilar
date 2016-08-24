'use strict'

var keyframesToString = require('./keyframesToString.js')
var componentsToString = require('./componentsToString.js')

function Registry(options) {
  const {pseudoWhitelist} = options
  const components = {}
  const keyframes = {}

  function addComponent(name, styles) {
    components[name] = styles
  }

  function addKeyframes(name, styles) {
    keyframes[name] = styles
  }

  function toStyleString() {
    return [
      keyframesToString({keyframes, pseudoWhitelist}),
      componentsToString({components, pseudoWhitelist})
    ].join('')
  }

  return {
    addComponent,
    addKeyframes,
    toStyleString
  }
}

module.exports = Registry
