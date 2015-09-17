'use strict'

import keyframesToString from './keyframesToString.js'
import componentsToString from './componentsToString.js'

export default (options) => {
  const {notifyObservers, pseudoWhitelist} = options
  const components = {}
  const keyframes = {}

  const addComponent = (name, styles) => {
    Object.assign(components, {[name]: styles})
    notifyObservers()
  }

  const addKeyframes = (name, styles) => {
    Object.assign(keyframes, {[name]: styles})
    notifyObservers()
  }

  const toStyleString = () => [
    keyframesToString({keyframes, pseudoWhitelist}),
    componentsToString({components, pseudoWhitelist}),
  ].join('')

  return {
    addComponent,
    addKeyframes,
    toStyleString,
  }
}
