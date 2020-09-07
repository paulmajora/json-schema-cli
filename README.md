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
npx jso-cli -d ./valid.input.json -o ./output.schema.json
```

#### Parameters

##### `-d` - JSON data
##### `-o` - Output file name of generated JSON Schema