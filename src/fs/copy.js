import fs from 'node:fs';
const fsPromises = fs.promises;

const sourcePath = 'files';
const destinationPath = 'files_copy';

const copy = async () => {
  fs.access(destinationPath, fs.constants.F_OK, (err) => {
    if (err) {
      fsPromises
        .cp(sourcePath, destinationPath, { recursive: true })
        .then(() => console.log('The files were copied!'))
        .catch((err) => {
          console.error(err);
        });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await copy();
