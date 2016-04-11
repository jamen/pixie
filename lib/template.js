'use strict';

/** An object that holds expressions and locations against a source.
  * @name Template
  * @class
  * @param {Array} dest - Fixed and expression pairs
  * @param {Array} fixed - Unchanging data.
  * @param {Array} expressions - Dynamic expression data.
  * @param {Object} meta - Metadata of the template.
  * @param {Boolean} [meta.noOrder=false] - Prevent reordering of data right-to-left.
  */
function Template(dest, fixed, expressions, meta) {
  this.dest = dest;
  this.fixed = fixed;
  this.expressions = expressions;
  this.meta = meta || {};
}

// /** Clone current `Template` into a new `Template`.
//   * @name clone
//   * @function
//   * @memberof Template#
//   * @param {Object} [meta] - Metadata of new template.
//   * @return {Template} Clone of the current template.
//   */
//
// Template.prototype.clone = function(meta) {
//   if (typeof meta === 'undefined') {
//     meta = this.meta;
//   }
//
//   return new Template(this.shell.slice(), meta);
// };
//
// /** Serialize the template to JSON.
//   * @name serialize
//   * @function
//   * @memberof Template#
//   * @param {replace} [replace] - Replacer method for JSON.stringify.
//   * @param {space} [space] - Spacing for JSON.stringify.
//   * @return {String} JSON representation of the `Template`.
//   */
//
// Template.prototype.serialize = function(replace, space) {
//   return JSON.stringify(this, replace, space);
// };

module.exports = Template;
