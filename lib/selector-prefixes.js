'use strict'

var selectorPrefixes = {
  '::selection': 'moz',
  '::placeholder': ['webkit', 'moz', 'ms'],
  ':fullscreen': ['webkit', 'moz', 'ms'],
  '::backdrop': ['webkit'],
  ':read-only': ['moz'],
  ':read-write': ['moz'],
  ':any-link': ['webkit']
}

module.exports = selectorPrefixes
