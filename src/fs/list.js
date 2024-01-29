import fs from 'node:fs';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = join(__dirname, 'files');

const fsPromises = fs.promises;

const list = async () => {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fsPromises
        .readdir(filePath)
        .then((data) => console.log(data))
        .catch((err) => {
          console.error(err);
        });
    }
  });
};

await list();
