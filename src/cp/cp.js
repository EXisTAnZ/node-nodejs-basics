import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

// дано:
const folderName = "files", cpFileName = "script.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      cpFilePath = path.join(__dirname, folderName, cpFileName);

const spawnChildProcess = async (...args) => {
    const cp = spawn("node", [cpFilePath, ...args]);
    process.stdin.pipe(cp.stdin);
    cp.stdout.pipe(process.stdout);                                                                                                                                                                                                                                                                                                                
};

spawnChildProcess('deadlyArgument', 'and', 'deadlyFact');
