'use strict'

import Component from './Component.js'
import Registry from './Registry.js'
import Keyframes from './Keyframes.js'

export default (options) => {
  let observers = []

  const notifyObservers = () => observers.forEach((observer) => observer())

  const subscribe = (observer) => {
    observers = [...observers, observer]
    return () => {
      observers = observers.filter((candidate) => candidate !== observer)
    }
  }

  const registry = Registry({...options, notifyObservers})

  return {
    component: Component({...options, registry}),
    keyframes: Keyframes({...options, registry}),
    subscribe,
    toStyleString: registry.toStyleString,
  }
}
