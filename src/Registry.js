'use strict'

const keyframesToString = require('./keyframesToString.js')
const componentsToString = require('./componentsToString.js')

function Registry(options) {
  const {notifyObservers, pseudoWhitelist} = options
  const components = {}
  const keyframes = {}

  function addComponent(name, styles) {
    components[name] = styles
    notifyObservers()
  }

  function addKeyframes(name, styles) {
    keyframes[name] = styles
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
