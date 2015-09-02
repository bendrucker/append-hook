'use strict'

var test = require('tape')
var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var document = require('global/document')
var proxyquire = require('proxyquire')

test(function (t) {
  t.plan(3)

  var Append = proxyquire('./', {
    'global/document': {
      body: {
        contains: function contains () {
          // element does not yet exist in body
          // it's being appended
          return false
        }
      }
    }
  })

  var vtree = h('div', {hook: Append(callback)}, 'Hello')
  var rootNode = createElement(vtree)
  document.body.appendChild(rootNode)

  function callback (node) {
    t.ok(node)
    t.ok(node.parentNode)
    t.equal(node.childNodes[0].data, 'Hello')
    document.body.removeChild(rootNode)
  }
})

test(function (t) {
  var Append = proxyquire('./', {
    'global/document': {
      body: {
        contains: function contains () {
          // element does exist in body
          // it's not being appended
          return true
        }
      }
    }
  })

  var vtree = h('div', {hook: Append(t.fail.bind(t, 'hook should not run'))}, 'Hello')
  var rootNode = createElement(vtree)
  document.body.appendChild(rootNode)
  t.end()
})
