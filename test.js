'use strict'

var test = require('tape')
var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var document = require('global/document')
var Append = require('./')

test(function (t) {
  t.plan(3)

  var vtree = h('div', {hook: Append(callback)}, 'Hello')
  var rootNode = createElement(vtree)
  document.body.appendChild(rootNode)

  function callback (node) {
    t.ok(node)
    t.ok(node.parentNode)
    t.equal(node.childNodes[0].data, 'Hello')
  }
})
