var electron = require("electron")

electron.app.on("ready", function(){
    var mainWindow = new electron.BrowserWindow({width: 800, height:480, 'node-integration': false, 'icon': __dirname + '/icon.ico'})
    mainWindow.loadURL('file://' + __dirname + '/index.html')
});