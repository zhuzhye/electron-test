// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("node:path");
require("./server");
// var liveServer = path.join(__dirname, "relative/path/to/live-server");
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // sandbox: false,
      // nodeIntegration: true,
      // contextIsolation:false,//关闭上下隔离
      // webSecurity: false,
      // preload: path.join(__dirname, "./preload.js"),
    },
  });
  // liveServer.start({
  //   port: 8888, // 你想要的端口号
  //   host: "localhost",
  //   root: "./dist",
  //   open: false, // 是否自动打开浏览器
  //   file: "index.html", // 启动时打开的文件
  //   wait: 1000, // 文件更改时等待时间(ms)
  //   logLevel: 2, // 日志级别 0-2
  // });
  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  // Menu.setApplicationMenu(null);
  // mainWindow.loadURL(`file://${path.join(__dirname, "./dist")}/index.html`); // 新增

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
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
