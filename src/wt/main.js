import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import { once } from "events";

// дано:
const workerFileName = "worker.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      workerFilePath = path.join(__dirname, workerFileName);

const promises = [];

const performCalculations = async () => {
    for (let i = 0; i<os.cpus().length; i++) {
        const worker = new Worker(workerFilePath);
        promises.push(once(worker, 'message'));
        worker.postMessage(i+10);
    }
    
    Promise.allSettled(promises).then(res => 
    console.log(res.map(item => {
        return item.status==='fulfilled' ? {
            status: 'resolved',
            data: item.value[0],
        } : {
            status: 'error',
            data: null,
        }
    })));
};

await performCalculations();



