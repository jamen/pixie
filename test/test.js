var test = require('tape')
var pixie = require('../dist/pixie.js')
var parse = pixie.parse
var compile = pixie.compile
var render = pixie.render

function renderOG (source, data, open, close) {
  return compile(parse(source, open, close), data)
}

test('parse', function (t) {
  t.plan(4)

  var sample1 = parse('foo{{bar}}baz{{qux}}qix', '{{', '}}')
  var sample2 = parse('{{foo}}bar{{baz}}qux{{qix}}', '{{', '}}')
  var sample3 = parse('foo bar baz qux qix', '{{', '}}')
  var sample4 = parse('foo __bar__ baz __qux__', '__', '__')

  t.same(sample1, [['foo', 'baz', 'qix'], ['bar', 'qux']], 'inner expressions')
  t.same(sample2, [['', 'bar', 'qux', ''], ['foo', 'baz', 'qix']], 'outer expressions')
  t.same(sample3, [['foo bar baz qux qix'], []], 'no expressions')
  t.same(sample4, [['foo ', ' baz ', ''], ['bar', 'qux']], 'same open and close tags')
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

function renderTest (render) {
  test('render', function (t) {
    t.plan(2)

    var sample1 = render('foo{{bar}}baz{{qux}}qix', { bar: 'hello', qux: 'world' }, '{{', '}}')
    var sample2 = render('<%foo%>bar<%baz%>qux<%qix%>', { foo: 'bar', baz: 'qux', qix: 'qaz' }, '<%', '%>')

    t.is(sample1, 'foohellobazworldqix', 'plain render')
    t.is(sample2, 'barbarquxquxqaz', 'custom tags')
  })
}

renderTest(render)
renderTest(renderOG)
