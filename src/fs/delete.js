import fs from 'node:fs';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRemove.txt');

const fsPromises = fs.promises;

const remove = async () => {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fsPromises
        .unlink(filePath)
        .then(() => console.log('The file was removed!'))
        .catch((err) => {
          console.error(err);
        });
    }
  });
};

await remove();
