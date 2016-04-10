'use strict';

var Template = require('./template');

module.exports = function create(json) {
  var raw = JSON.parse(json);

  if (raw.source && raw.source.type === 'Buffer') {
    raw.source = new Buffer(raw.source.data);

    raw.points = raw.points.map(function(point) {
      if (point[0].type === 'Buffer') {
        point[0] = new Buffer(point[0].data);
      }

      return point;
    });
  }

  return new Template(raw.source, raw.points, raw.meta);
};
