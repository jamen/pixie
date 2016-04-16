# Pixie
> Expression-based templating engine for reusability and injectable semantics.

Pixie is a simple templating library, where "expressions" are points where new data goes, such as `{{foobar}}`.  You can plug in "engines" to Pixie to interpret these expressions in a custom way.  This allows you to build syntax and semantics inside of templates in a modular way.  Pixie itself is very lightweight, since it only provides the tools necessary to built

Templates:
```html
<div class='foo-{{bar}}'>
  <p>Hello {{^world}}</p>
</div>
```
Pixie templates contain expressions, and here in the example those would be `{{bar}}` and `{{^world}}` .  Expressions are points in the source where you want to fill in new data later on.  In Pixie, expressions can be opened and closed with whatever you want, but the defaults are `{{` to open and `}}` to close...  See [docs/TAGS](docs/TAGS.md) for more information.

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



## Installation
```shell
$ npm install --save pixie
```
Usable inside of Node.js or browser.

## Usage
```javascript
const pixie = require('pixie');
```
See [docs](docs/) for more information.

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
