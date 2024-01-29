import fs from 'node:fs';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const fsPromises = fs.promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = join(__dirname, 'files', 'fresh.txt');

const TEXT = 'I am fresh and young';

const create = async () => {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      fsPromises
        .writeFile(filePath, TEXT)
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
