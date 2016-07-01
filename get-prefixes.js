'use strict'

const autoprefixer = require('autoprefixer')

const browsers = [
  'last 2 chrome versions',
  'last 2 firefox versions',
  'last 2 edge versions',
  'last 2 opera versions',
  'last 2 ios versions',
  'last 2 safari versions',
  'Firefox ESR',
  'ie 11',
  'ie_mob 11',
]

console.log(autoprefixer({browsers}).info())
