import fs from "fs";
import path from "path";

const filesFolder = path.resolve("src", "fs", "files");

const remove = async () => {
  fs.rm(filesFolder + "/fileToRemove.txt", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
