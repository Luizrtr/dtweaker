const { app, BrowserWindow, globalShortcut } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })

    win.setMenu(null)
  
    win.loadURL('http://localhost:3000')
}
  
app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

//auto focus when user press the shortcut
app.on('ready', ()=>{
  globalShortcut.register('CommandOrControl+l', app.focus)
})
  