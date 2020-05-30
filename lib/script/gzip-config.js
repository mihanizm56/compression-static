const zlib = require('zlib');

module.exports.gzipConfig = {
  compressor: zlib.gzipSync,
  options: {
    level: 9,
  },
  ext: '.br',
};
