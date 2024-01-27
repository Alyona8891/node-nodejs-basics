import fs from 'node:fs';
const fsPromises = fs.promises;

const path = 'files/fileToRemove.txt';

const remove = async () => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fsPromises
        .unlink(path)
        .then(() => console.log('The file was removed!'))
        .catch((err) => {
          console.error(err);
        });
    }
  });
};

await remove();
