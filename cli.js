#!/usr/bin/env node
'use strict';

require("copy-paste").global()

const cwd = require("cwd");
const path = require("path");

let copyPath = path.resolve(process.cwd());

copy(copyPath);

process.exit();
