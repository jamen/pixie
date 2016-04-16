# Engines
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
