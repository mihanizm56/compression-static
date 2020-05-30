#!/usr/bin/env node
const { argv } = require('yargs');
const { compressFiles } = require('./script/compress-files');

const dirs = argv.dir;
const options = {
  gzip: argv.gzip,
  brotli: argv.brotli,
  'brotli-level': argv['brotli-level'],
  'gzip-level': argv['gzip-level'],
};

compressFiles({ dirs, options });
