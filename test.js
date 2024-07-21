const fs = require("fs");
const path = require("path");

const crypto = require("crypto");

function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash("sha256");
  hashSum.update(fileBuffer);
  return hashSum.digest("hex");
}

function getFiles(dir) {
  let results = {};
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results[file] = getFiles(filePath);
    } else {
      results[file] = getFileHash(filePath);
    }
  });

  return results;
}

// const directoryPath = "./dist"; // 将此路径替换为要读取的文件夹路径
// const fileTree = getFiles(directoryPath);

// console.log(JSON.stringify(fileTree, null, 2));
const getFileTree = (directoryPath) => {
  const fileTree = getFiles(directoryPath);
  return JSON.stringify(fileTree, null, 2);
};

module.exports = getFileTree;
