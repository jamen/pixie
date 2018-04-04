
<h1>
  <img src=https://cdn.rawgit.com/pixiejs/pixie/master/pixie.svg alt=pixie height=64>
</h1>

> Tiny template engine (371 bytes uglified and gziped)

```js
const { parse, compile } = require('pixie')

const template = parse('foo {{bar}} baz', '{{', '}}')
// => [['foo ', ' baz'], ['bar']]

compile(template, { bar: 'Baaar!' })
// => 'foo Baaar! baz'
```

## Install

```sh
npm i pixie
```

## Usage

### `parse(source, open, close)`

Converts a string to a template.

- `source`: template string source being parsed
- `open`: tag for opening expressions
- `close`: tag for closing expressions

```js
// Parse with tags
pixie.parse('Hello {{world}} foo {{bar}} baz.', '{{', '}}')

// Parse with alternate tags
pixie.parse('Hello <%world%>!', '<%', '%>')
```

### `compile(template, data)`

Replaces values from an object by key.

- `template`: template object that was returned from `parse`
- `data`: object or array to insert into the expressions

```js
var template = pixie.parse('foo {{bar}} baz {{qux}}')

pixie.compile(template, { bar: 'baaar', qux: 'quuux' })
// => 'foo baaar baz quuux'
```

### Template structure

An array containing two other arrays recognized as `[fragments, expressions]`.

- **Expressions**: Data between opening and closing tags. In `Foo {{bar}} baz {{qux}}` it would be `['bar', 'qux']`.
- **Fragments**: Data around your expressions. In the same example, the fragments would be `['Foo ', ' baz', '']`.

## License

MIT &copy; [Jamen Marz](http://jamenmarz.com/)

---

[![version](https://img.shields.io/npm/v/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![license](https://img.shields.io/npm/l/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![downloads/month](https://img.shields.io/npm/dm/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![downloads](https://img.shields.io/npm/dt/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![support me](https://img.shields.io/badge/support%20me-paypal-green.svg?style=flat-square)](https://www.paypal.me/jamenmarz/5usd) [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)
