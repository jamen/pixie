
<h1 align='center'><img src='https://cdn.rawgit.com/pixiejs/pixie/master/pixie.svg' alt='pixie' width='492'><br><br></h1>

A tiny templater (321 bytes minified) that creates templates as arrays of strings.  It can be precompiled, swap in different compilers, or used inside other JSON projects.

## Installation

```sh
$ npm i pixie
```

## Usage

### `parse(source, open, close)`

Parse the source into a template, which is passed off to a a compiler.

- `source`: The template string source being parsed
- `open`: Tag for opening expressions
- `close`: Tag for closing expressions

```js
// Parse with tags
parse('Hello {{world}} foo {{bar}} baz.', '{{', '}}')

// Parse with alternative tags
parse('Hello <%world%>!', '<%', '%>')
```

### `compile(template, data)`

A simple compiler, substitutes properties from an object by name

- `template`: A template object that was returned from [`pixie.parse`](#parse)
- `data`: An object/array that you want to insert the data into the expressions

```js
// Parse a template
var template = parse('foo {{bar}} baz {{qux}}')

// Compile template
compile(template, { bar: 'baaar', qux: 'quuux' })
// => 'foo baaar baz quuux'
```

<a name='structure'></a>

### Template structure

Templates are an array of `[fragments, expressions]`.  The source of this
template can look something like this:

```
Hello, {{world}}! How is {{person}}?
```

- **Expressions** are the strings inside your tokens. `'world'` and `'person'` in the example.
- **Fragments** are the strings outside the expressions.

## License

MIT &copy; [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![license](https://img.shields.io/npm/l/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![downloads/month](https://img.shields.io/npm/dm/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![downloads](https://img.shields.io/npm/dt/pixie.svg?style=flat-square)](https://npmjs.com/package/pixie) [![support me](https://img.shields.io/badge/support%20me-paypal-green.svg?style=flat-square)](https://www.paypal.me/jamenmarz/5usd) [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)
