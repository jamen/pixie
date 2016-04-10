# sem
> Expression-based templating engine for reusability and injectable semantics.

Sem (Semantic Expression Model) is a simplistic expression-based templating engine that can work on top of multiple types of data (stings, buffers, arrays, etc).  It parses where expressions are located with `sem.parse` in a reusable `Template` object.  From here, you can take the `Template` to `sem.compile` which allows you to plug different engines in, alongside some data, to create semantics from the expressions, and ultimately get an output.  The whole process can be reduced to one with `sem.render`.

Engines:
```javascript
function pow(expression, data) {
  expression = expression.toString();
  if (expression[0] === '^') {
    var name = expression.slice(1);
    return Math.pow(data[name]);
  }
}
```

Example script:
```javascript
const data = {world: 4};
const output = sem.render(source, { engines: [pow], data });
console.log(output);
// => "Hello 16"
```

Templates:
```
Hello ${^world}
```

## Installation
```shell
$ npm install --save sem
```
Usable inside of Node.js or browser.

# Ideas
 - **Positional:** It works through positional data.  `Template` objects hold locations to expressions, then an engine can compile these however they want.
 - **Right-to-left:** Interpolating right-to-left allows sem to need less calculating for the locations and slicing.
 - **Expressions:** Anything between the opening expression token and closing expression token is open for interpretation by the engine.
 - **Reusable:** Sem working through `Template` objects allows it to be highly reusable (parse once, compile over and over) and serializable.
 - **Pluggable:** You can hook in custom engines with `sem.compile` to interpret the expressions in a custom way.

## Usage
```javascript
const sem = require('sem');
```
See [docs](docs/) for more information.

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
