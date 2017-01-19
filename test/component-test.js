'use strict'

var Stilar = require('../lib/stilar.js')
var test = require('tape')

test('component() returns an object with classNames', function (t) {
  var stilar = new Stilar()
  var styles = stilar.component('Widget', {
    Widget: {
      margin: '0',
      display: 'flex',

      '@media screen and (max-width: 600px)': {
        padding: '10px'
      }
    },

    button: {
      cursor: 'pointer',

      ':hover': {
        color: 'red'
      }
    }
  })

  t.equal(styles.Widget, 'Widget')
  t.equal(styles.button, 'Widget-button')
  t.end()
})
