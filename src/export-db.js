const pathUtils = require('./utils/pathUtils')
const jsf = require('json-schema-faker');
const schemaPath = `./schema/${process.argv[2]}`;
console.log(`Loading Schema => schema/${process.argv[2]}`);
const schema = require(`./schema/${process.argv[2]}`);
const fs = require('fs');
const faker = require('faker');

jsf.extend('faker', () => faker);
const json = JSON.stringify(jsf.generate(schema));

const dbPath = pathUtils.getPackagePath('@avkash3108/json-server-fake-api', 'src/db/db.json');
console.log(`${dbPath}`);
fs.writeFile(`${dbPath}`, json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});