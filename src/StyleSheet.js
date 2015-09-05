'use strict'

const Component = require('./Component.js')
const Registry = require('./Registry.js')
const Keyframes = require('./Keyframes.js')
const objectAssign = require('object-assign')

function StyleSheet(opts) {
  const options = objectAssign({}, opts)
  let observers = []
  const registry = Registry(objectAssign({notifyObservers}, options))

  function notifyObservers() {
    observers.forEach((observer) => observer())
  }

  function subscribe(observer) {
    observers.push(observer)
    return function () {
      observers = observers.filter((candidate) => candidate !== observer)
    }
  }

  return {
    component: Component(objectAssign({registry}, options)),
    keyframes: Keyframes(objectAssign({registry}, options)),
    subscribe,
    toStyleString: registry.toStyleString,
  }
}

module.exports = StyleSheet
