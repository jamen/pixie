# `sem`
> A "Simple Expression Model" templating engine.

Sem is a simplistic expression model templating engine.  This means there is no statements, only data interpolation...  The `parse` function captures positional information alongside a source using the `Template` object, then slices those positions right-to-left using `compile`.

## Installation
```shell
$ npm install --save sem
```

## Usage
```javascript
const sem = require('sem');
```
### `sem.render(source, options)`
Perform a _source to source_ compile (`sem.parse()` -> `sem.compile()`).
 - `options` (`Object`): Passed into `sem.parse(foo, options)` and `sem.compile(foo, options)`.

Example:
```
Hello %{location}
```
```javascript
const output = sem.render(input, {
  location: 'world',
  prefix: '%{'
});
console.log(output);
```
```
Hello world
```

### `sem.parse(source, options)`
Turn a `Buffer` source into a `Template`.
 - `source` (`Buffer`): Source to parse.
 - `options` (`Object`): Parsing options.
   - `options.prefix` (`String`): Expression opening syntax (default: `#{`)
   - `options.suffix` (`String`): Expression closing syntax (default: '}')

Example:
```
Foo @bar&
```
```javascript
const template = sem.parse(input, {
  prefix: '@',
  suffix: '&'
});
console.log(template);
```
```
Template {                                    
  source: <Buffer 46 6f 6f 20 40 62 61 72 26>,
  pos: [
    [ 'bar', 4, 9 ]
  ],                   
  meta: {}
}                                  
```

### `sem.compile(template, locals)`
Compile a `Template` to a `Buffer` source with the provided `locals`.
 - `template` (`Template`): The template to compile.
 - `locals` (`Object`): The locals to use.

Example:
```
Template {                                    
  source: <Buffer 46 6f 6f 20 40 62 61 72 26>,
  pos: [
    [ 'bar', 4, 9 ]
  ],                   
  meta: {}
}
```
```javascript
const output = sem.compile(template, {
  bar: 'qux'
});
console.log(output);
```
```
Foo qux
```

### `new Template(source, pos, [meta])`
Am object that holds positional data to slice points.
 - `source` (`Buffer`): The source `pos` applies to.
 - `pos` (`Array`): Positional data, a.k.a. slice points.
 - `meta` (`Object`): Metadata information about the template.

Note that `sem.parse()` creates these, and `sem.compile()` serializes these, then `sem.render` is just both.  So you should rarely need to touch `Template`.


## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
