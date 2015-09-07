'use strict'

const Component = require('./Component.js')
const Registry = require('./Registry.js')
const Keyframes = require('./Keyframes.js')
const objectAssign = require('object-assign')

function StyleSheet(opts) {
  const options = objectAssign({}, opts)
  let observers = []

  const notifyObservers = () => {
    observers.forEach((observer) => observer())
  }

  const subscribe = (observer) => {
    observers.push(observer)
    return () => {
      observers = observers.filter((candidate) => candidate !== observer)
    }
  }

  const registry = Registry(objectAssign({notifyObservers}, options))

  return {
    component: Component(objectAssign({registry}, options)),
    keyframes: Keyframes(objectAssign({registry}, options)),
    subscribe,
    toStyleString: registry.toStyleString,
  }
}

module.exports = StyleSheet
