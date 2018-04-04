var pixie = require('../dist/pixie.js')
var benchmark = require('@jamen/bench')

var parse = pixie.parse
var compile = pixie.compile
var render = pixie.render

var sample = 'hello {{world}} foo {{bar}} baz {{qux}} qix'
var template = parse(sample, '{{', '}}')
var data = { world: 'WORLD', bar: 'BAR', qux: 'QUX' }

let bench = benchmark()

bench.add('parse', () => {
  parse(sample, '{{', '}}')
})

bench.add('compile', () => {
  compile(template, data)
})

bench.add('render', () => {
  render(sample, data, '{{', '}}')
})

bench.add('render (c & p)', () => {
  compile(parse(sample, '{{', '}}'), data)
})

bench.run()
