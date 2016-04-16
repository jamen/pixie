# Options
You can provide options to `parse` and `compile`.  `render` is simply a wrapper around both of these so the options are passed to both.

## [Parsing](docs/API.md#parse)
 - `tags` (`Array`): Tags to use for parsing the template.  (Example `['{{', '}}']`, `['<%', '%>']`)

## [Compiling](docs/API.md#compile)
 - `engines` (`Array`): Engines to use for expressions.
 - `serialize` (`Function`): Function to serialize all outputs.
