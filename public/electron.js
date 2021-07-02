const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });

  const urlToStart = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

  window.setBackgroundColor = '#333';
  window.menuBarVisible = false;
  window.loadURL(urlToStart);

  window.once('ready-to-show', () => {
    window.show();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});