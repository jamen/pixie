#!/usr/bin/env node

var pixie = require('../dist/pixie.js')
var minimist = require('minimist')

if (process.stdin.isTTY) {
  console.error('Pixie cannot be used without stdio.')
  process.exit(1)
}

var chunks = []
process.stdin.on('data', function (buf) {
  chunks.push(buf)
})

process.stdin.on('end', function () {
  var source = Buffer.concat(chunks)
  main(source)
})

function main (source) {
  var data = minimist(process.argv.slice(2))
  var tags = process.env.PIXIE_TAGS
  tags = tags ? tags.split(',') : ['{{', '}}']
  var output = pixie.render(source.toString(), data, tags[0], tags[1])
  return process.stdout.write(output)
}
