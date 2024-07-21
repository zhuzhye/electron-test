// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require("node:path");
const fs = require("fs");
const getFileTree = require("./test");
// require("./server");
// var liveServer = path.join(__dirname, "relative/path/to/live-server");
function writeFile(event, data) {
  console.log(data);
  const res = getFileTree(path.join(__dirname, "./dist"));
  console.log(res);
  return res;
}
function readFile() {
  const res = fs
    .readFileSync("D:/学习/学习计划/electronTest/hello.txt")
    .toString();
  console.log(res);
  return res;
}
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      // sandbox: false,
      // nodeIntegration: true,
      // contextIsolation:false,//关闭上下隔离
      // webSecurity: false,
      preload: path.resolve(__dirname, "./preload.js"),
    },
  });
  ipcMain.on("file-save", writeFile);
  ipcMain.handle("file-read", readFile);
  ipcMain.handle("file-tree", writeFile);

  // mainWindow.loadURL("http://localhost:10000");

  // Menu.setApplicationMenu(null);
  mainWindow.loadURL(`file://${path.join(__dirname, "./dist")}/index.html`);
  // mainWindow.loadURL(`${path.join(__dirname, "./dist")}/index.html`);
  mainWindow.webContents.openDevTools();
}
const template = [
  {
    label: "系统",
    submenu: [
      {
        label: "更新",
        click: () => {
          // 发送事件到渲染进程
          // mainWindow.webContents.send("menu-action", "new-file");
        },
      },
      {
        label: "退出",
        click: () => {
          app.quit();
        },
      },
    ],
  },
];
//设置菜单
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
