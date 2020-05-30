const zlib = require('zlib');

module.exports.gzipConfig = (level = 9) => ({
  compressor: zlib.gzipSync,
  options: {
    level: level,
  },
  extension: '.gz',
});
