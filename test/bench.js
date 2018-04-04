var pixie = require('../dist/pixie.js')
var Suite = require('benchmark').Benchmark.Suite
var { cpu } = require('systeminformation')
var bench = new Suite('pixie')

var parse = pixie.parse
var compile = pixie.compile
var render = pixie.render

var sample = 'hello {{world}} foo {{bar}} baz {{qux}} qix'
var template = parse(sample, '{{', '}}')
var data = { world: 'WORLD', bar: 'BAR', qux: 'QUX' }

bench.add('pixie.parse', () => {
  parse(sample, '{{', '}}')
})

bench.add('pixie.compile', () => {
  compile(template, data)
})

bench.add('pixie.parse + pixie.compile (render)', () => {
  compile(parse(sample, '{{', '}}'), data)
})

bench.add('pixie.render', () => {
  render(sample, data, '{{', '}}')
})

bench.on('complete', () => {
  cpu(x => console.log(`\nCPU: ${x.speed} GHz ${x.manufacturer} ${x.brand}`))
})

bench.on('cycle', e => console.log(String(e.target)))
bench.on('error', console.error)
bench.run()
