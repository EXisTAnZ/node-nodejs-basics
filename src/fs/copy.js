import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

// дано:
const fromFolderName = "files",
      toFolderName = "files_copy",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      fromFolder = path.join(__dirname, fromFolderName),
      toFolder = path.join(__dirname, toFolderName);

const copy = async () => {
    const opts = { recursive: true, errorOnExist: true, force: false };
    fs.cp(fromFolder, toFolder, opts).then().catch(error => { throw new Error(errmsg) });
};

await copy();
