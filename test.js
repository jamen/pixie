var test = require('tape')
var pixie = require('./')
var parse = pixie.parse
var compile = pixie.compile

test('parse', function (t) {
  t.plan(4)
  t.same(parse('foo{{bar}}baz{{qux}}qix', '{{', '}}'), [['foo', 'baz', 'qix'], ['bar', 'qux']], 'inner expressions')
  t.same(parse('{{foo}}bar{{baz}}qux{{qix}}', '{{', '}}'), [['', 'bar', 'qux', ''], ['foo', 'baz', 'qix']], 'outer expressions')
  t.same(parse('foo bar baz qux qix', '{{', '}}'), [['foo bar baz qux qix'], []], 'no expressions')
  t.same(parse('foo __bar__ baz __qux__', '__', '__'), [['foo ', ' baz ', ''], ['bar', 'qux']], 'same open and close tags')
})

test('compile', function (t) {
  t.plan(4)

  var sample1 = parse('foo{{bar}}baz{{qux}}qix', '{{', '}}')
  var sample2 = parse('{{foo}}bar{{baz}}qux{{qix}}', '{{', '}}')
  var sample3 = parse('foo bar baz qux qix', '{{', '}}')

  t.is(compile(sample1, { bar: 'baaar', qux: 'quuux' }), 'foobaaarbazquuuxqix', 'inner expressions')
  t.is(compile(sample2, { foo: 'foooo', baz: 'baaaz', qix: 'qiiix' }), 'foooobarbaaazquxqiiix', 'outer expressions')
  t.is(compile(sample3, { dummy: 'data' }), 'foo bar baz qux qix', 'no expressions')
  t.is(compile(sample1, { bar: 'baaar' }), 'foobaaarbazundefinedqix', 'missing data')
})
