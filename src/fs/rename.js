import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

// дано:
const folderName = "files",
      wrongFileName = "wrongFilename.txt",
      properFileName = "properFilename.md",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      fromFile = path.join(__dirname, folderName, wrongFileName),
      toFile = path.join(__dirname, folderName, properFileName);
const isExist = (path) => fs.access(path).then(_ => true).catch(_ => false)
const rename = async () => {
    if (await isExist(toFile)) throw new Error(errmsg);
    fs.rename(fromFile, toFile).then().catch(error => { throw new Error(errmsg); });
};

await rename();