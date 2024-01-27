import fs from 'node:fs';
const fsPromises = fs.promises;

const oldPath = 'files/wrongFilename.txt';
const newPath = 'files/properFilename.md';

const rename = async () => {
  fs.access(oldPath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.access(newPath, fs.constants.F_OK, (error) => {
        if (error) {
          fsPromises
            .rename(oldPath, newPath)
            .then(() => console.log('The file was renamed!'))
            .catch((err) => {
              throw new Error('FS operation failed');
            });
        } else {
          throw new Error('FS operation failed');
        }
      });
    }
  });
};

await rename();
