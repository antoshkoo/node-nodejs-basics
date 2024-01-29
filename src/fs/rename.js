import fs from "fs";
import path from "path";

const filesFolder = path.resolve("src", "fs", "files");

const rename = async () => {
  fs.rename(
    filesFolder + "/wrongFilename.txt",
    filesFolder + "/properFilename.md",
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

await rename();
