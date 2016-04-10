'use strict';

/** An object that holds expressions and locations against a source.
  * @name Template
  * @class
  * @param {Buffer|String|Array} source - The source of the template.
  * @param {Array} points - Expressions and their locations.
  * @param {Object} meta - Metadata of the template.
  * @param {Boolean} [meta.noOrder=false] - Prevent reordering of data right-to-left.
  */
function Template(source, points, meta) {
  this.source = source || [];
  this.points = points || [];
  this.meta = meta || {};

  if (!this.meta.noOrder) {
    // Sort right-to-left
    this.points = this.points.sort(function(a, b) {
      return b[1] - a[1];
    });
  }
}

/** Clone current `Template` into a new `Template`.
  * @name clone
  * @function
  * @memberof Template#
  * @param {Object} [meta] - Metadata of new template.
  * @return {Template} Clone of the current template.
  */

Template.prototype.clone = function(meta) {
  if (typeof meta === 'undefined') {
    meta = this.meta;
  }

  return new Template(this.source.slice(), this.points.slice(), meta);
};

/** Serialize the template to JSON.
  * @name serialize
  * @function
  * @memberof Template#
  * @param {replace} [replace] - Replacer method for JSON.stringify.
  * @param {space} [space] - Spacing for JSON.stringify.
  * @return {String} JSON representation of the `Template`.
  */

Template.prototype.serialize = function(replace, space) {
  return JSON.stringify(this, replace, space);
};

module.exports = Template;
