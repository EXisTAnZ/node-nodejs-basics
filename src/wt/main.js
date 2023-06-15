import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import { Worker } from "node:worker_threads";


// дано:
const workerFileName = "worker.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      workerFilePath = path.join(__dirname, workerFileName);

const res = [];

const sendResult = async (result, id) => {
    if(result) res[id] = { status: "resolved", data: result };
    else res[id] = { status: "error", data: null };
    if (res.length == os.cpus().length && res.every(item => !!item.status)) console.log(res);
}

const performCalculations = async () => {
    for (let i = 0; i<os.cpus().length; i++) {
        const worker = new Worker(workerFilePath);
        worker.postMessage(i+10);
        worker.on("message", (fibo) => sendResult(fibo, i));
        worker.on("error", () => sendResult());
    }
};

await performCalculations();