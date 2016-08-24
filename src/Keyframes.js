'use strict'

function Keyframes(options) {
  const {registry} = options

  return function (name, styles) {
    registry.addKeyframes(name, styles)
  }
}

module.exports = Keyframes
