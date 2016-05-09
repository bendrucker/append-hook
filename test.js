'use strict'

var test = require('tape')
var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var patch = require('virtual-dom/patch')
var diff = require('virtual-dom/diff')
var Append = require('./')

test(function (t) {
  t.plan(2)

  var vtree = h('div', {
    hook: Append(callback),
    key: 'foo'
  }, 'Hello')

  var element = createElement(vtree)

  function callback (node) {
    t.ok(node)
    t.equal(node.childNodes[0].data, 'Hello')

    var vtree2 = h('div', {
      hook: Append(t.fail.bind(t, 'Append called twice')),
      key: 'foo'
    }, 'Hello Two')
    patch(element, diff(vtree, vtree2))
  }
})
