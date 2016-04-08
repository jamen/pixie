'use strict';

module.exports = function compile(template, locals) {
  var replica = template.clone();
  var res = template.source;
  var data;

  replica.pos.forEach(function(info) {
    data = locals[info[0]];

    if (typeof data === 'undefined') {
      throw new Error('Cannot find local "' + info[0] + '".');
    }

    var start = res.slice(0, info[1]);
    var end = res.slice(info[2], template.source.length);

    res = Buffer.concat([start, new Buffer(data.toString()), end]);
  });

  return res;
};
