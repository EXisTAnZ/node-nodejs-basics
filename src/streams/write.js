import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// дано:
const folderName = "files",
      writeFileName = "fileToWrite.txt",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      writeFilePath = path.join(__dirname, folderName, writeFileName);

const write = async () => {
    const stream = new fs.WriteStream(writeFilePath);
    stream.on('error', () => { throw new Error(errmsg) });
    process.stdin.pipe(stream);
};

await write();