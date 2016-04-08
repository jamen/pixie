'use strict';

function Template(source, pos, meta) {
  this.source = source || [];
  this.pos = pos || [];
  this.meta = meta || {};

  if (!this.meta.noOrder) {
    this.pos = this.pos.sort(function(a, b) {
      return b[1] - a[1];
    });
  }
}

Template.prototype.clone = function(meta) {
  if (typeof meta === 'undefined') {
    meta = this.meta;
  }

  return new Template(this.source.slice(), this.pos, meta);
};

module.exports = Template;
