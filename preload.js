// const fs = require("fs");
// const path = require("path");
// console.log(path.resolve(__dirname, "/user/example.txt"), '"example.txt');
// fs.writeFile("./example.txt", "abc", () => {
//   console.log("done");
// });
console.log("preload", process.version);

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("myAPI", {
  version: process.version,
  saveFile: (data) => {
    console.log(data, "data");
    ipcRenderer.send("file-save", data);
  },
  readFile: () => {
    //返回promise
    return ipcRenderer.invoke("file-read");
  },
  readFileTree: () => {
    return ipcRenderer.invoke("file-tree");
  },
});
