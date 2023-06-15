import { parentPort } from "worker_threads";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

let res = 0;
parentPort.on("message", (n) => {
    res = nthFibonacci(n);
    sendResult();
})

const sendResult = () => {
    if (res) parentPort.postMessage(res);
};

sendResult();