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

// 比较两个文件夹中的文件并生成增量包
function generateDeltaPackage(dist1, dist2, deltaDir) {
  const filesDist1 = traverseDir(dist1).map((file) =>
    path.relative(dist1, file)
  );
  const filesDist2 = traverseDir(dist2).map((file) =>
    path.relative(dist2, file)
  );
  const allFiles = new Set([...filesDist1, ...filesDist2]);
  console.log(filesDist1, "hashMap1");
  console.log(allFiles);
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

  allFiles.forEach((relativePath) => {
    const hash1 = hashMap1.get(relativePath);
    const hash2 = hashMap2.get(relativePath);

    if (hash1 === hash2 && hash1 !== undefined) {
      // 文件相同，跳过
      return;
    }

    const file2Path = path.join(dist2, relativePath);
    if (hash2 !== undefined) {
      const deltaFilePath = path.join(deltaDir, relativePath);
      fs.mkdirSync(path.dirname(deltaFilePath), { recursive: true });
      fs.copyFileSync(file2Path, deltaFilePath);
      console.log(`Added to delta package: ${relativePath}`);
    }
  });

  //  查找文件名不同但哈希值相同的文件
  // hashMap2.forEach((hash2, relativePath2) => {
  //   if (
  //     !hashMap1.has(relativePath2) &&
  //     Array.from(hashMap1.values()).includes(hash2)
  //   ) {
  //     const file2Path = path.join(dist2, relativePath2);
  //     const deltaFilePath = path.join(deltaDir, relativePath2);
  //     fs.mkdirSync(path.dirname(deltaFilePath), { recursive: true });
  //     fs.copyFileSync(file2Path, deltaFilePath);
  //     console.log(
  //       `Added to delta package (different name, same hash): ${relativePath2}`
  //     );
  //   }
  // });
}

// 示例使用
const dist1 = "./dist";
const dist2 = "./dist1";
const deltaDir = "./output";

generateDeltaPackage(dist1, dist2, deltaDir);
