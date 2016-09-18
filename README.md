[<h1 align="center"><img src="https://cdn.rawgit.com/jamen/pixie/master/docs/logo.svg" alt="Pixie" width="500"><br><br></h1>][dustin]
> Small templating engine that uses arrays as intermediate data.

```js
// Create intermediate data
var template = pixie.parse('Foo {{bar}} baz')

// Templates in format of [partials, expressions]
//   template === [['Foo ', ' baz'], ['bar']]
// Where:
//   partials === ['Foo ', ' baz']
//   expressions === ['bar']

// Compile it against data
pixie.compile(template, { bar: 'qux' })
// => 'Foo qux baz'
```

These templates are stored in a simple intermediate format through arrays and strings.  They can be serialized as JSON, passed to 3rd party modules, and can exist natively with no dependencies.

## Installation
```shell
$ npm install --save pixie
```
Use inside of the browser with Browserify, Webpack, or other requirejs bundlers.

## Usage
```javascript
pixie.parse('Hello {{world}}');
// => [['Hello', ''], ['world']]

pixie.compile([['Hello', ''], ['world']], {world: 'Mars'});
// => 'Hello Mars'

pixie.render('Hello {{world}}', {world: 'Earth'});
// => 'Hello Earth'
```
See [docs](docs/) for more information.

## Credits
 - Thanks to [Dustin][dustin] for designing logo.

| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
  [dustin]: https://github.com/dustindowell22
