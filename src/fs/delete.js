import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

// дано:
const folderName = "files",
      removeFileName = "fileToRemove.txt",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      removeFilePath = path.join(__dirname, folderName, removeFileName);

const remove = async () => {
    fs.rm(removeFilePath).then().catch(error => { throw new Error(errmsg); });
};

await remove();