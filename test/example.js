var sem = require('../lib');

var source = 'Hello </test/> world </foo/>';
var tpl = sem.parse(source);

console.log('Source:\n', source);
console.log('Template:\n', tpl);
