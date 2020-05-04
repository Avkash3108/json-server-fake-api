var jsf = require('json-schema-faker');
var schema = require('./schema');
var fs = require('fs');
var faker = require('faker');

jsf.extend('faker', () => faker);
var json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./src/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});