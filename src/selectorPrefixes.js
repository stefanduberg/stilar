'use strict'

var selectorPrefixes = {
  '::selection': ['moz'],
  '::placeholder': ['webkit', 'moz', 'ms'],
  ':fullscreen': ['webkit', 'moz', 'ms'],
  '::backdrop': ['webkit'],
  ':read-only': ['moz'],
  ':read-write': ['moz']
}

module.exports = selectorPrefixes
