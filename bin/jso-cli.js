const generateSchema = require('generate-schema');
const fs = require('fs');
const path = require('path');
const optionDefinitions = [
    { name: 'output', alias: 'o', type: String },
    { name: 'data', alias: 'd', type: String },
];
const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);
const validData = JSON.parse(
    fs.readFileSync(options.data, 'utf8')
);
const ensureDirectoryExistence = (filePath) => {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};



const schema = generateSchema.json('Schema', validData);
ensureDirectoryExistence(options.output);
fs.writeFileSync(options.output, JSON.stringify(schema, null, 4));