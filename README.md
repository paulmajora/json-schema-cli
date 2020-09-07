# ajv-cli

## Contents

- [Installation](#installation)
- Commands
  - [Generate JSON Schema]
- [jso-cli options]


## Installation
```sh
npm install -g jso-cli
```

## Generate JSON Schema

This command generates JSON schema files from any valid JSON File

```sh
jso-cli -d ./valid.input.json -o ./output.schema.json
```

#### Parameters

##### `-d` - JSON data
##### `-o` - Output file name of generated JSON Schema

## You can then validate data with the schema using [ajv-cli](https://www.npmjs.com/package/ajv-cli)

```sh
ajv-cli validate -d ./valid.input.json -s ./output.schema.json
ajv-cli validate -d ./test.input.json -s ./output.schema.json
```