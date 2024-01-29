import fs from 'node:fs';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourcePath = join(__dirname, 'files');
const destinationPath = join(__dirname, 'files_copy');

const fsPromises = fs.promises;


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
