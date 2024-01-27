import fs from 'node:fs';
const fsPromises = fs.promises;

const path = 'files/fileToRead.txt';

const read = async () => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fsPromises
        .readFile(path, 'utf-8')
        .then((data) => console.log(data))
        .catch((err) => {
          console.error(err);
        });
    }
  });
};

await read();
