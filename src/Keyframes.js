'use strict'

export default (options) => {
  const {registry} = options

  return (name, styles) => {
    registry.addKeyframes(name, styles)
  }
}
