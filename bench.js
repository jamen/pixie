var test = require('tape-benchmark')(require('tape'))
var pixie = require('./')
var compile = pixie.compile
var render = pixie.render

test('benchmark', function (t) {
  t.plan(3)

  t.benchmark('parse', function () {
    pixie('hello {{world}} foo {{bar}} baz {{qux}} qix')
  })

  var template = pixie('foo {{bar}} baz {{qux}} qix {{qaz}} buz')
  var data = { bar: 'BAAAR', qux: 'QUUUX', qaz: 'QAAAZ' }
  t.benchmark('compile', function () {
    compile(template, data)
  })

  t.benchmark('render', function () {
    render('foo {{bar}} baz {{qux}} qix {{qaz}} buz', data)
  })
})
