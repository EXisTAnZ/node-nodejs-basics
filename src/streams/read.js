import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// дано:
const folderName = "files",
      readFileName = "fileToRead.txt",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      readFilePath = path.join(__dirname, folderName, readFileName);

const read = async () => {
    const stream = new fs.ReadStream(readFilePath);
    stream.on('error', () => { throw new Error(errmsg) });
    stream.pipe(process.stdout);
};

await read();