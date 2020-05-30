const brotli = require('brotli');

module.exports.brotliConfig = {
  compressor: brotli.compress,
  options: {
    mode: 1,
    quality: 11,
    lgwin: 22,
  },
  ext: '.br',
};
