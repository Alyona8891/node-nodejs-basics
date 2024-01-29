import { Worker } from 'node:worker_threads';
import os from 'node:os';

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
      new Worker('./src/wt/worker.js', { workerData: i + INCREMENT })
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
