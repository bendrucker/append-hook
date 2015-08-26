# append-hook [![Build Status](https://travis-ci.org/bendrucker/append-hook.svg?branch=master)](https://travis-ci.org/bendrucker/append-hook)

> virtual-dom hook for element append


## Install

```
$ npm install --save append-hook
```


## Usage

```js
var AppendHook = require('append-hook')
var h = require('virtual-dom/h')

var vtree = h('div', {
  onAppend: AppendHook(callback)  
})

function callback (node) {
  //=> div appended to the DOM
}
```

## API

#### `AppendHook(callback)` -> `object`

##### callback

*Required*  
Type: `function`

A callback to call when the virtual node is appended to the DOM as a real node.

## License

MIT © [Ben Drucker](http://bendrucker.me)
