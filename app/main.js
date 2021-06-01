const { app, BrowserWindow, globalShortcut } = require('electron')
const isDev = require('electron-is-dev');

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })

    win.setMenu(null)
    if(!isDev){
      win.setSkipTaskbar(true)
    }
    win.loadURL('http://localhost:3000')
}

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()
  
  globalShortcut.register('CommandOrControl+l', app.focus)

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
  