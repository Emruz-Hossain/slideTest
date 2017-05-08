const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const $ = require('jquery');
let win

function createWindow() {
   win = new BrowserWindow({ width: 1366, height:770})
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)