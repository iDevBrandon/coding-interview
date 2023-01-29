const path = require("path");
const { app, BrowserWindow } = require("electron");

const isDev = process.env.NODE_ENV === "development";
const isMac = process.platform === "darwin";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Image Resize",
    width: isDev ? 500 : 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (!isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});
