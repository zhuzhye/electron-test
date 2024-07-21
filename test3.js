const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// 递归遍历文件夹并返回文件列表
function traverseDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      traverseDir(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// 计算文件的哈希值
function calculateHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash("sha256");
  hashSum.update(fileBuffer);
  return hashSum.digest("hex");
}

// 查找在dist1中但不在dist2中的文件并删除
function findAndDeleteNonExistentFiles(dist1, dist2) {
  const filesDist1 = traverseDir(dist1).map((file) =>
    path.relative(dist1, file)
  );
  const filesDist2 = traverseDir(dist2).map((file) =>
    path.relative(dist2, file)
  );

  const hashMap1 = new Map();
  const hashMap2 = new Map();

  filesDist1.forEach((relativePath) => {
    const fullPath = path.join(dist1, relativePath);
    const hash = calculateHash(fullPath);
    hashMap1.set(relativePath, hash);
  });

  filesDist2.forEach((relativePath) => {
    const fullPath = path.join(dist2, relativePath);
    const hash = calculateHash(fullPath);
    hashMap2.set(relativePath, hash);
  });

  const filesToDelete = [];

  hashMap1.forEach((hash1, relativePath1) => {
    const hash2 = hashMap2.get(relativePath1);

    if (hash1 === hash2 && hash2 !== undefined) {
      // 文件名和哈希值相同，不需要删除
      return;
    }

    if (hash2 === undefined || hash1 !== hash2) {
      // 文件名相同但哈希值不同，或者文件名不同，需删除
      filesToDelete.push(relativePath1);
    }
  });

  filesToDelete.forEach((relativePath) => {
    const filePath = path.join(dist1, relativePath);
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  });
}

// 示例使用
const dist1 = "./dist";
const dist2 = "./dist1";

findAndDeleteNonExistentFiles(dist1, dist2);
