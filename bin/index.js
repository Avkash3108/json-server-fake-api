#!/usr/bin/env node
const yargs = require('yargs');
const fakeAPI = require('../src/task/fake-api');

yargs.scriptName("Run fake API")
  .usage('$0 <cmd> [args]')
  .command(fakeAPI)
  .help()
  .argv
