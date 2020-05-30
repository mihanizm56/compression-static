const brotli = require('brotli');

module.exports.brotliConfig = (level = 11) => ({
  compressor: brotli.compress,
  options: {
    mode: 1,
    quality: level,
    lgwin: 22,
  },
  extension: '.br',
});
