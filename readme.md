
<h1 align='center'><img src='https://cdn.rawgit.com/pixiejs/pixie/master/pixie.svg' alt='pixie' width='492'><br><br></h1>

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

Pixie is a tiny template engine (321 bytes uglified and [27 SLOC](./index.js)) that creates templates as arrays of strings. This lets you use alternative compilers to support only the syntax you want, precompile templates, or serialize templates as JSON. See the [`pixie`](https://npmjs.com/browse/keyword/pixie) keyword on npm for more packages.

## Installation

```sh
$ npm i pixie
```

## Usage

<a name='parse'></a>

### `pixie.parse(source, open, close)`

Parse the source into a [template](#structure). This is passed off to a `compile` (e.g. [`pixie.compile`](#compile) or [others](https://npmjs.com/browse/keyword/pixie))

- `source`: The template string source being parsed
- `open`: Tag for opening expressions
- `close`: Tag for closing expressions

```js
// Parse with tags
pixie.parse('Hello {{world}} foo {{bar}} baz.', '{{', '}}')

// Parse with alternative tags
pixie.parse('Hello <%world%>!', '<%', '%>')
```

<a name='compile'></a>

### `pixie.compile(template, data)`

A simple compiler, substitutes properties from an object by name

- `template`: A template object that was returned from [`pixie.parse`](#parse)
- `data`: An object/array that you want to insert the data into the expressions

```js
// Parse a template
var template = pixie.parse('foo {{bar}} baz {{qux}}')

// Compile template
pixie.compile(template, { bar: 'baaar', qux: 'quuux' })
// => 'foo baaar baz quuux'
```

<a name='structure'></a>

### Template structure

The template structure is an array, containing two other arrays recognized as `[fragments, expressions]`

- **Expressions**: Data between the opening and closing points. In `Foo {{bar}} baz {{qux}}` they would be `['bar', 'qux']`
- **Fragments**: Data around your expressions. In the same example, the fragments would be `['Foo ', ' baz', '']`

Compilers can choose to interpret and compile these however they choose. The `pixie.compile` ones is just a simple point-n-place

## License

MIT &copy; [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![license](https://img.shields.io/npm/l/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![downloads/month](https://img.shields.io/npm/dm/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![downloads](https://img.shields.io/npm/dt/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![support me](https://img.shields.io/badge/support%20me-paypal-green.svg?style=flat-square)](https://www.paypal.me/jamenmarz/5usd) [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)
