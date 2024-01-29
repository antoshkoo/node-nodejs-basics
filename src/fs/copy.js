import fs from "fs";
import path from "path";

const folderFrom = path.resolve("src", "fs", "files");
const folderTo = path.resolve("src", "fs", "files_copy");

const copy = async () => {
  if (fs.existsSync(folderTo)) {
    throw new Error("FS operation failed");
  } else {
    fs.cp(folderFrom, folderTo, { recursive: true }, () => {});
  }
};

await copy();
