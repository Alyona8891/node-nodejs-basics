import fs from 'node:fs';
const fsPromises = fs.promises;

const text = 'I am fresh and young';
const path = 'files/fresh.txt';

const create = async () => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      fsPromises
        .writeFile(path, text)
        .then(() => console.log('The file was created!'))
        .catch((err) => {
          console.error(err);
        });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();
