#!/usr/bin/env node

const cmd = require('./initCMD/initCMD');
const type = require('./cmpType/cmpType');
const path = require('./cmpPath/cmpPath');

let initCMD = cmd(process.argv[2]);
let componentType = type(process.argv[3]);
let componentPath = path(process.argv[4], process.argv[3]);