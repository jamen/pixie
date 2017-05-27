var test = require('tape')
var pixie = require('./')
var compile = pixie.compile
var render = pixie.render

test('parse', function (t) {
  t.plan(5)
  t.same(pixie('foo{{bar}}baz{{qux}}qix'), [['foo', 'baz', 'qix'], ['bar', 'qux']], 'inner expressions')
  t.same(pixie('{{foo}}bar{{baz}}qux{{qix}}'), [['', 'bar', 'qux', ''], ['foo', 'baz', 'qix']], 'outer expressions')
  t.same(pixie('foo bar baz qux qix'), [['foo bar baz qux qix'], []], 'no expressions')
  t.same(pixie('foo <%bar%> baz <%qux%>', '<%', '%>'), [['foo ', ' baz ', ''], ['bar', 'qux']], 'custom tags')
  t.same(pixie('foo __bar__ baz __qux__', '__', '__'), [['foo ', ' baz ', ''], ['bar', 'qux']], 'custom tags with same open and close')
})

test('render', function (t) {
  t.plan(2)
  t.is(render('foo{{bar}}baz{{qux}}qix', {bar: 'hello', qux: 'world'}), 'foohellobazworldqix', 'plain render')
  t.is(render('<%foo%>bar<%baz%>qux<%qix%>', {foo: 'bar', baz: 'qux', qix: 'qaz'}, '<%', '%>'), 'barbarquxquxqaz', 'custom tags')
})

test('compile', function (t) {
  t.plan(4)

  var sample1 = pixie('foo{{bar}}baz{{qux}}qix')
  var sample2 = pixie('{{foo}}bar{{baz}}qux{{qix}}')
  var sample3 = pixie('foo bar baz qux qix')

  t.is(compile(sample1, {bar: 'baaar', qux: 'quuux'}), 'foobaaarbazquuuxqix', 'inner expressions')
  t.is(compile(sample2, {foo: 'foooo', baz: 'baaaz', qix: 'qiiix'}), 'foooobarbaaazquxqiiix', 'outer expressions')
  t.is(compile(sample3, {dummy: 'data'}), 'foo bar baz qux qix', 'no expressions')
  t.is(compile(sample1, {bar: 'baaar'}), 'foobaaarbazqix', 'missing data')
})
