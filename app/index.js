const { app, BrowserWindow } = require('electron')

//create the window
function createWindow(){
    //window definition
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    
    //remove the toolbar menu
    win.setMenu(null)
    //load initial page
    win.loadFile('src/pages/home.html')
}

//reuns the app whe ready
app.whenReady().then(()=>{
    createWindow()

    //creates a windows if none is created on macOS
    app.on('activate', ()=>{
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

//full close the when click the exit button
app.on('window-all-closed', ()=>{
    if (process.platform !== 'darwin') {
        app.quit()
    }
})