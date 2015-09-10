'use strict'

const Component = require('./Component.js')
const Registry = require('./Registry.js')
const Keyframes = require('./Keyframes.js')

function Stilar(opts) {
  const options = {...opts}
  let observers = []

  const notifyObservers = () => observers.forEach((observer) => observer())

  const subscribe = (observer) => {
    observers = [...observers, observer]
    return () => {
      observers = observers.filter((candidate) => candidate !== observer)
    }
  }

  const registry = Registry({notifyObservers, ...options})

  return {
    component: Component({registry, ...options}),
    keyframes: Keyframes({registry, ...options}),
    subscribe,
    toStyleString: registry.toStyleString,
  }
}

module.exports = Stilar
