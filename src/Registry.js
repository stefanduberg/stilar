'use strict'

const keyframesToString = require('./keyframesToString.js')
const componentsToString = require('./componentsToString.js')

function Registry(options) {
  const {notifyObservers, pseudoWhitelist} = options
  const components = {}
  const keyframes = {}

  const addComponent = (name, styles) => {
    components[name] = styles
    notifyObservers()
  }

  const addKeyframes = (name, styles) => {
    keyframes[name] = styles
    notifyObservers()
  }

  const toStyleString = () => {
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
