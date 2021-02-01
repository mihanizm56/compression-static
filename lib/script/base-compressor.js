/* eslint-disable no-console */
const fs = require('fs');
const glob = require('glob');

module.exports.baseCompressor = ({ dirsToCompress, compressor, options, extension }) => {
  console.log(`Сжатие файлов ${extension} в директориях: ${dirsToCompress}`.yellow.underline);

  dirsToCompress.forEach(dir => {
    glob.sync(`${dir}**/*.?(js|json|html|css|txt|ico)`).forEach(filepath => {
      try {
        fs.readFile(filepath, (err, file) => {
          const compressedFilePath = filepath + extension;

          console.log(`compressed ${compressedFilePath}`.green);

          const compressedBuffer = compressor(file, options);

          if (Boolean(compressedBuffer)) {
            fs.writeFileSync(compressedFilePath, compressedBuffer);
          }

          console.log(`empty compressed file ${compressedFilePath}`.yellow);
        });
      } catch (error) {
        console.log('not success file compress:'.red, error);
      }
    });
  });
};
