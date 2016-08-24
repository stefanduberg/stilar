'use strict'

var keyframesToString = require('./keyframesToString.js')
var componentsToString = require('./componentsToString.js')

function Registry(options) {
  const {notifyObservers, pseudoWhitelist} = options
  const components = {}
  const keyframes = {}

  function addComponent(name, styles) {
    Object.assign(components, {[name]: styles})
    notifyObservers()
  }

  function addKeyframes(name, styles) {
    Object.assign(keyframes, {[name]: styles})
    notifyObservers()
  }

  function toStyleString() {
    return [
      keyframesToString({keyframes, pseudoWhitelist}),
      componentsToString({components, pseudoWhitelist}),
    ].join('')
  }

  return {
    addComponent,
    addKeyframes,
    toStyleString,
  }
}

module.exports = Registry
