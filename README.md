# Vajra
> Expression-based templating engine for reusability and injectable semantics.

Vajra is a simplistic expression-based templating engine that can work on top of multiple types of data (strings, buffers, arrays, etc).  It parses where expressions are located with `vajra.parse` in a reusable `Template` object.  From here, you can take the `Template` to `vajra.compile` which allows you to plug different engines in, alongside some data, to create semantics from the expressions, and ultimately get an output.  The whole process can be reduced to one with `vajra.render`.

Engines:
```javascript
function pow(expression, data) {
  if (expression[0] === '^') {
    return Math.pow(data[expression.slice(1)]);
  }
}
```

Templates:
```
Hello ${^world}
```

Example script:
```javascript
const data = {world: 4};
const output = vajra.render(source, data, {engines: [pow]});
console.log(output);
// => "Hello 16"
```

## Installation
```shell
$ npm install --save vajra
```
Usable inside of Node.js or browser.

## Usage
```javascript
const vajra = require('vajra');
```
See [docs](docs/) for more information.

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
