'use strict'

var Component = require('./Component.js')
var Registry = require('./Registry.js')
var Keyframes = require('./Keyframes.js')

function Stilar(options) {
  let observers = []

  function notifyObservers() {
    observers.forEach((observer) => observer())
  }

  function subscribe(observer) {
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
    toStyleString: registry.toStyleString
  }
}

module.exports = Stilar
