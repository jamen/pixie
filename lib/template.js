'use strict';

function Template(source, points, meta) {
  this.source = source || [];
  this.points = points || [];
  this.meta = meta || {};

  if (!this.meta.noOrder) {
    this.points = this.points.sort(function(a, b) {
      return b[1] - a[1];
    });
  }
}

Template.prototype.clone = function(meta) {
  if (typeof meta === 'undefined') {
    meta = this.meta;
  }

  return new Template(this.source.slice(), this.points.slice(), meta);
};

Template.prototype.serialize = function(replace, space) {
  return JSON.stringify(this, replace, space);
};

module.exports = Template;
