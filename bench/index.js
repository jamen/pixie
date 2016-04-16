'use strict';

var bench = require('./_helper');
var pixie = require('../lib');
var hb = require('handlebars');
var test = bench.create();
var ss = bench.small;
var ls = bench.large;
var small = pixie.parse(ss);
var large = pixie.parse(ls);
var hbs = hb.compile(ss);
var hbl = hb.compile(ls);
var data = bench.data;
var opts = {engines: [bench.caps]};

test.add('Parsing small', function() {
  pixie.parse(ss);
});

test.add('Parsing large', function() {
  pixie.parse(ls);
});

test.add('Compiling small without engines', function() {
  pixie.compile(small, data);
});

test.add('Compiling large without engines', function() {
  pixie.compile(large, data);
});

test.add('Compiling small with engines', function() {
  pixie.compile(small, data, opts);
});

test.add('Compile large with engines', function() {
  pixie.compile(large, data, opts);
});

test.add('Rendering small without engines', function() {
  pixie.render(ss, data);
});

test.add('Rendering large without engines', function() {
  pixie.render(ls, data);
});

test.add('Rendering small with engines', function() {
  pixie.render(ss, data, opts);
});

test.add('Rendering large with engines', function() {
  pixie.render(ls, data, opts);
});

test.add('Handlebars small comparison', function() {
  hbs(data);
});

test.add('Handlebars large comparison', function() {
  hbl(data);
});

test.on('error', console.error);

test.run();
