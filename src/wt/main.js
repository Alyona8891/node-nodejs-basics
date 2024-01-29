import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path, {join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = join(__dirname, 'worker.js');

const INCREMENT = 10;

const defineCPUCores = () => {
  const cpuCores = os.cpus();
  return cpuCores.length;
};

const performCalculations = async () => {
  const cores = defineCPUCores();
  const workersArr = [];

  for (let i = 1; i <= cores; i += 1) {
    workersArr.push(
      new Worker(filePath, { workerData: i + INCREMENT })
    );
  }

  Promise.allSettled(
    workersArr.map((worker) => {
      return new Promise((res, rej) => {
        worker.on('message', (message) => {
          res({ status: 'resolved', data: message });
        });
        worker.on('error', () => {
          rej({ status: 'error', data: null });
        });
      });
    })
  ).then((results) => {
    console.log(results.map((result) => result.value));
  });
};

await performCalculations();
