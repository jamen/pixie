# Templates
```html
<div class='foo-{{bar}}'>
  <p>Hello {{^world}}</p>
</div>
```
Pixie templates contain expressions, and here in the example those would be `{{bar}}` and `{{^world}}` .  Expressions are points in the source where you want to fill in new data later on.  In Pixie, expressions can be opened and closed with whatever you want, but the defaults are `{{` to open, and `}}` to close.
