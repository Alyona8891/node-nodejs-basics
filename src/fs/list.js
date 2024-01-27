import fs from 'node:fs';
const fsPromises = fs.promises;

const path = 'files';

const list = async () => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fsPromises
        .readdir(path)
        .then((data) => console.log(data))
        .catch((err) => {
          console.error(err);
        });
    }
  });
};

await list();
