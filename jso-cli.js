
const generateSchema = require('generate-schema');
const fs = require('fs');
const optionDefinitions = [
    { name: 'output', alias: 'o', type: String },
    { name: 'data', alias: 'd', type: String },
];
const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);
const validData = JSON.parse(
    fs.readFileSync(options.data, 'utf8')
);
const schema = generateSchema.json('Schema', validData);
fs.writeFileSync(options.output, JSON.stringify(schema, null, 4));