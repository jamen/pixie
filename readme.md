
<h1>
  <img src=https://cdn.rawgit.com/pixiejs/pixie/master/pixie.svg alt=pixie height=64>
</h1>

> Tiny template engine

```js
var pixie = require('pixie')

// Parse a template
var template = pixie.parse('foo {{bar}} baz', '{{', '}}')
// => [['foo ', ' baz'], ['bar']]

// Compile (using simple default)
pixie.compile(template, { bar: 'Baaar!' })
// => 'foo Baaar! baz'
```

Pixie is a tiny template engine (371 bytes uglified and gziped) that returns arrays of strings.
This is great for precompiling templates or serializing templates as JSON.

## Install

```sh
$ npm i pixie
```

## Usage

### `pixie.parse(source, open, close)`

Converts the source into a template.

- `source`: The template string source being parsed.
- `open`: Tag for opening expressions.
- `close`: Tag for closing expressions.

```js
// Parse with tags
pixie.parse('Hello {{world}} foo {{bar}} baz.', '{{', '}}')

// Parse with alternative tags
pixie.parse('Hello <%world%>!', '<%', '%>')
```

### `pixie.compile(template, data)`

Substitutes properties from an object by name.

- `template`: A template object that was returned from `pixie.parse`.
- `data`: An object/array that you want to insert the data into the expressions.

```js
// Parse a template
var template = pixie.parse('foo {{bar}} baz {{qux}}')

// Compile template
pixie.compile(template, { bar: 'baaar', qux: 'quuux' })
// => 'foo baaar baz quuux'
```

### Template structure

The template structure is an array, containing two other arrays recognized as `[fragments, expressions]`.

- **Expressions**: Data between the opening and closing points. In `Foo {{bar}} baz {{qux}}` they would be `['bar', 'qux']`.
- **Fragments**: Data around your expressions. In the same example, the fragments would be `['Foo ', ' baz', '']`.

## License

MIT &copy; [Jamen Marz](http://jamenmarz.com/)

---

[![version](https://img.shields.io/npm/v/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![license](https://img.shields.io/npm/l/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![downloads/month](https://img.shields.io/npm/dm/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![downloads](https://img.shields.io/npm/dt/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![support me](https://img.shields.io/badge/support%20me-paypal-green.svg?style=flat-square)](https://www.paypal.me/jamenmarz/5usd) [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)
