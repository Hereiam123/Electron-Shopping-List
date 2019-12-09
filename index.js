const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready', () => {
    //Create new window
    mainWindow = new BrowserWindow({});
    //Load html file into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'firstWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Quit app when closed
    mainWindow.on('closed', () => {
        app.quit();
    });

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    //Insert menu
    Menu.setApplicationMenu(mainMenu);
});

//Create window for adding items
function createAddWindow() {
    //Create new window
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add Shopping List Item'
    });

    //Load html file into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Set addWindow to null when closed
    addWindow.on('close', () => {
        addWindow = null;
    });
}

//Create menu template
const mainMenuTemplate = [{
    label: 'File',
    submenu: [{
        label: 'Add Item',
        click() {
            createAddWindow();
        }
    }, {
        label: 'Clear Items'
    }, {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
            app.quit();
        }
    }]
}];