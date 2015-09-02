'use strict'

var Hook = require('virtual-hook')
var nextTick = require('next-tick')
var partial = require('ap').partial
var document = require('global/document')

module.exports = AppendHook

function AppendHook (callback) {
  return Hook({
    hook: function hook (node) {
      if (document.body.contains(node)) return
      nextTick(partial(callback, node))
    }
  })
}
