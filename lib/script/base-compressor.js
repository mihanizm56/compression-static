var fs = require('fs');
var glob = require('glob');

module.exports.baseCompressor = ({ compressFunction, options, extension, workdirs }) => {
  if (!workdirs) {
    console.log('Please enter the input dir');
    return;
  }

  console.log(`Сжатие файлов ${extension} в директориях: ${workdirs}`);

  workdirs.forEach(workdir => {
    glob.sync(workdir + '**/*.?(js|json|html|css|txt)').forEach(filepath => {
      fs.readFile(filepath, (err, buffer) => {
        const compressedFilePath = filepath + extension;

        console.log(compressedFilePath);

        const compressedBuffer = compressFunction(buffer, options);

        fs.writeFileSync(compressedFilePath, compressedBuffer);
      });
    });
  });
};
