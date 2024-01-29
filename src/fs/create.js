import fs from "fs";
import path from "path";

const filesFolder = path.resolve("src", "fs", "files");

const create = async () => {
  fs.readFile(filesFolder + "/fresh.txt", "utf8", (err, data) => {
    if (err) {
      fs.writeFile(
        filesFolder + "/fresh.txt",
        "I am fresh and young",
        (err) => {
          if (err) throw err;
        }
      );
      return;
    }
    throw new Error("FS operation failed");
  });
};

await create();
