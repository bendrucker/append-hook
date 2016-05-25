'use strict'

var Hook = require('virtual-hook')
var nextTick = require('next-tick')
var partial = require('ap').partial

var KEY = '__APPEND_HOOK_KEY__'

module.exports = AppendHook

function AppendHook (callback) {
  return Hook({
    hook: function hook (node, vnodeKey) {
      var key = KEY + vnodeKey
      if (node[key]) return

      node[key] = true
      nextTick(partial(callback, node))
    }
  })
}
