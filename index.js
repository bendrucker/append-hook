'use strict'

var Hook = require('virtual-hook')
var nextTick = require('next-tick')
var partial = require('ap').partial

var key = '__APPEND_HOOK_KEY'

module.exports = AppendHook

function AppendHook (callback) {
  return Hook({
    hook: function hook (node) {
      if (node[key]) return

      node[key] = true
      nextTick(partial(callback, node))
    }
  })
}
