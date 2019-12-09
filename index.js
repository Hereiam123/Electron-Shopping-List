const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;

//Listen for app to be ready
app.on('ready', () => {
    //Create new window
    mainWindow = new BrowserWindow({});
    //Load html file into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'firstWindow.html'),
        protocol: "file:",
        slashes: true
    }));
});

