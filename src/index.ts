import { app, BrowserWindow, ipcMain } from "electron";
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

import * as ntClient from "wpilib-nt-client";

const roboRIOAddress = "172.22.11.2";

const client = new ntClient.Client();

ipcMain.on("Start", (ipcEvent: Electron.IpcMainEvent) => {
  client.start((isConnected: boolean, err: Error) => {
    // Displays the error and the state of connection
    console.log({ isConnected, err });
  }, roboRIOAddress);

  // Adds a listener to the client
  client.addListener((key: any, val: any, type: String, id) => {
    console.log({ key, val, type, id });
    if (key === "/Shuffleboard/Dashboard-Test/Data")
      ipcEvent.reply("Data", val);
  });
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 1100,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open DevTools.
  // mainWindow.webContents.openDevTools();

  // set full screen
  mainWindow.setFullScreen(false);

  mainWindow.setMenuBarVisibility(false);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
