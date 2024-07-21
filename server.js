const express = require("express");
const path = require("path");
const app = express();

const PORT = 10000;

// 设置静态文件夹
app.use(express.static(path.join(process.resourcesPath, "app", "dist")));
// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
