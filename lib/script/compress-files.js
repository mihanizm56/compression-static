require('colors');

const { baseCompressor } = require('./base-compressor');
const { gzipConfig } = require('./gzip-config');
const { brotliConfig } = require('./brotli-config');

module.exports.compressFiles = ({ dirs, options }) => {
  const compressConfigs = [];

  if (!dirs || !options) {
    console.log('no valid i/o were provided'.red.underline);
    return;
  }

  try {
    const dirsToCompress = JSON.parse(dirs);

    if (options.gzip) {
      compressConfigs.push(gzipConfig(options['gzip-level']));
    }

    if (options.brotli) {
      compressConfigs.push(brotliConfig(options['brotli-level']));
    }

    compressConfigs.forEach(({ compressor, options, extension }) =>
      baseCompressor({
        compressor,
        options,
        extension,
        dirsToCompress,
      }),
    );
  } catch (error) {
    console.log('no valid i/o were provided'.red.underline, error);

    return;
  }
};
