var fs = require('fs');
var glob = require('glob');

module.exports.baseCompressor = ({ dirsToCompress, compressor, options, extension }) => {
  console.log(`Сжатие файлов ${extension} в директориях: ${dirsToCompress}`);

  dirsToCompress.forEach(dir => {
    glob.sync(dir + '**/*.?(js|json|html|css|txt)').forEach(filepath => {
      fs.readFile(filepath, (err, file) => {
        const compressedFilePath = filepath + extension;

        console.log(compressedFilePath);

        const compressedBuffer = compressor(file, options);

        fs.writeFileSync(compressedFilePath, compressedBuffer);
      });
    });
  });
};
