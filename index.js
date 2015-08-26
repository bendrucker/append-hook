'use strict'

var nextTick = require('next-tick')
var partial = require('ap').partial

module.exports = AppendHook

function AppendHook (callback) {
  if (!(this instanceof AppendHook)) {
    return new AppendHook(callback)
  }
  this.callback = callback
}

AppendHook.prototype.hook = function appendHook (node) {
  nextTick(partial(this.callback, node))
}
