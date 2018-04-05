
<h1>
  <img src=https://cdn.rawgit.com/pixiejs/pixie/master/pixie.svg alt=pixie height=64>
</h1>

> Tiny template engine (422 bytes uglified and gziped)

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
parse('Hello {{world}} foo {{bar}} baz.', '{{', '}}')

// Parse with alternate tags
parse('Hello <%world%>!', '<%', '%>')
```

### `compile(template, data)`

Replaces values from an object by key.

- `template`: template object that was returned from `parse`
- `data`: object or array to insert into the expressions

```js
var template = parse('foo {{bar}} baz {{qux}}')

compile(template, { bar: 'baaar', qux: 'quuux' })
// 'foo baaar baz quuux'
```

### `render(source, data, open, close)`

An alternative to doing `compile(parse(source, open, close), data)`, it is slightly faster and creates no intermediate template.

```js
render('Hello, {{world}}!', { world: 'Earth' }, '{{', '}}')
// 'Hello Earth!'
```

### Template structure

Given some template source:

```
Hello, {{world}}! I am {{person}}.
```

This is parsed into a template as `[fragments, expressions]`.  The expressions would be `['world', 'person']`, and the fragments be the data surrounding the expressions `['Hello, ', '! I am ', '.']`.  Compilers interpret these to create their output.

### Command-line Interface

The package also includes a CLI.  It just parses stdin and compiles stdout.

```sh
pixie --name "John Doe" < template.src.md > template.md
```

## License

MIT &copy; [Jamen Marz](http://jamenmarz.com/)
