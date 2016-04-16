[<h1 align="center"><img src="https://cdn.rawgit.com/jamen/pixie/master/docs/logo.svg" alt="Pixie" width="500"><br><br></h1>][dustin]
> A lightweight, pluggable, and browser/node-compatible  templating engine.

Pixie is a simple templating library, where _expressions_ are points where new data goes (such as `{{foobar}}`).  You can plug in custom _engines_ into Pixie in order to interpret these expressions however you want.  This allows you to build syntax and semantics inside of templates in a modular way.  Pixie itself is very lightweight, since it only provides the tools necessary to inject data and interpret the expressions.  It also works inside both the browser or Node.js.

Templates:
```html
<div class='foo-{{bar}}'>
  <p>Hello {{^world}}</p>
</div>
```
Pixie templates contain expressions, and here in the example those would be `{{bar}}` and `{{^world}}` .  Expressions are points in the source where you want to fill in new data later on.  In Pixie, expressions can be opened and closed with whatever you want, but the defaults are `{{` to open, and `}}` to close...

Engines:
```
Hello {{^world}}
```
```javascript
// An engine that capitalizes the first letter of the selected data.
function capitalize(expression, data) {
  if (expression[0] === '^') {
    return expression[1].toUpperCase() + expression.slice(2);
  }
}

pixie.render(input, {
  // Template data
  world: 'earth'
}, {
  // Load capitalization engine.
  engines: [captialize]
});
```
```
Hello Earth!
```
Engines allow you to alter what expressions mean in the context of your templates.  In this example, we have the `capitalize` engine.  It checks to see if any given expression starts with `^`, and if it does then it returns whatever data is being selected with the first letter capitalized.  We load this engine into the `render` call to get our output.

## Installation
```shell
$ npm install --save pixie
```
Usable inside of the browser with Browserify/Webpack/other bundlers.

## Usage
```javascript
const pixie = require('pixie');

// - Rendering
pixie.render(
  'Hello {{world}}',
  {world: 'foo'}
);
// => 'Hello foo'

// - Parsing
pixie.parse('Hello {{world}}');
// => { partials: ['Hello ', ''], expressions: ['world'] }

// - Compiling
pixie.compile(
  { partials: ['Hello', ''], expressions: ['world'] },
  { world: 'Earth' }
);
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
