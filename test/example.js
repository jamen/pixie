var sem = require('../lib');

var source = 'Hello #{test} world #{foo}';
var strtpl = sem.parse(source);
var buftpl = sem.parse(new Buffer(source));

console.log('Source:\n', source);
console.log('String template:\n', strtpl);
console.log('Buffer template:\n', buftpl);
