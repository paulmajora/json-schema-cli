#! /usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var generateSchema = require('generate-schema');

var optionDefinitions = [
    { name: 'output', alias: 'o', type: String },
    { name: 'data', alias: 'd', type: String }
];
var commandLineArgs = require('command-line-args');
var options = commandLineArgs(optionDefinitions);
var validData = JSON.parse(
    fs.readFileSync(options.data, 'utf8')
);

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

var schema = generateSchema.json('Schema', validData);
ensureDirectoryExistence(options.output);
fs.writeFileSync(options.output, JSON.stringify(schema, null, 4));