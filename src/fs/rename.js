import fs from 'node:fs';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
const newPath = join(__dirname, 'files', 'properFilename.md');

const fsPromises = fs.promises;

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
