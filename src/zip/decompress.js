import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";

// дано:
const folderName = "files",
      fileName = "fileToCompress.txt",
      archName = "archive.gz",
      errmsg = "FS operation failed";

const __dirname = path.dirname(fileURLToPath(import.meta.url)),
      filePath = path.join(__dirname, folderName, fileName),
      archPath = path.join(__dirname, folderName, archName);

const decompress = async () => {
    const unzipper = createGunzip(),
    readStream = new fs.ReadStream(archPath),
    outStream = new fs.WriteStream(filePath);

    readStream.pipe(unzipper).pipe(outStream);
};

await decompress();