
<h1 align="center"><img src="https://cdn.rawgit.com/jamen/pixie/master/docs/logo.svg" alt="pixie" width="500"><br><br></h1>

> Tiny template engine

```js
var pixie = require('pixie')

// Parse a template:
var template = pixie('foo {{bar}} baz')

// Compile (using simple default):
pixie.compile(template, { bar: 'Baaar!' })
// => 'foo Baaar! baz'

// Render if you're lazy:
pixie.render('{{foo}} bar {{baz}}', { foo: 'Fuu', baz: 'boz' })
// => 'Fuu bar boz'
```

Pixie is a tiny ([>40 LOC](./index.js)) template engine base around arrays and strings.  It's made open-ended where you can compile templates with different syntax in the expressions.  See the [`pixie`](https://npmjs.com/browse/keyword/pixie) keyword on npm for your options.

## Installation

```sh
$ npm install --save pixie
```

## Usage

<a name='pixie'></a>
### `pixie(source, [open, close])`

Parse the source into a [template](#structure).  This is passed off to a `compile` (e.g. [`pixie.compile`](#pixie_compile) or [others](https://npmjs.com/browse/keyword/pixie)).

 - `source` (`String`): The template string source being parsed.
 - `open` (`String`): Symbol for opening expressions. Defaults to `{{`
 - `close` (`String`): Symbol for closing expressions.  Defaults to `}}`

```js
// Parse normally:
pixie('Hello {{world}} foo {{bar}} baz.')

// With custom tags:
pixie('Hello <% world %>!', '<%', '%>')
```

<a name='pixie_compile'></a>
### `pixie.compile(template, data)`

A simple compiler, substitutes properties from an object by name.

```js
// Parse a template:
var template = pixie('foo {{bar}} baz {{qux}}')

// Compile template:
pixie.compile(template, { bar: 'baaar', qux: 'quuux' })
// => 'foo baaar baz quuux'
```

<a name='pixie_render'>
### `pixie.render(source, data, [open, close])`

A combination of `pixie` and `pixie.compile` if you do not plan to reuse the template.

```js
pixie.render('Hello {{world}}!', { world: 'Mars' })
// => 'Hello Mars!'
```

<a name='structure'></a>
### Template structure

The template structure is an array, containing two other arrays recognized as  `[partials, expression]`

 - **Expressions**: Data between the opening and closing points.  In `Foo {{bar}} baz {{qux}}` they would be `['bar', 'qux']`
 - **Partials**: Data around your expressions.  In the same example, the partials would be `['Foo ', ' baz', '']`

Compilers can choose to interpret and compile these however they choose.  The one `pixie` provides is just a simple point-n-place.

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/pixie.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/pixie/jamen.svg?style=flat-square)](https://travis-ci.org/pixie/jamen) [![downloads/month](https://img.shields.io/npm/dm/pixie.svg?style=flat-square)][package] [![downloads](https://img.shields.io/npm/dt/pixie.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/pixie.svg?style=flat-square)][package] [![support me](https://img.shields.io/badge/support%20me-paypal-green.svg?style=flat-square)](https://www.paypal.me/jamenmarz/5usd) [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)
[package]: https://npmjs.com/package/pixie
