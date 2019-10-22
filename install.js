/* eslint-disable */
const
    fs = require('fs-extra'),
    path = require('path');

if (process.cwd() != __dirname) {
    console.info('Installing theme default');
    fs.ensureDirSync(path.resolve(__dirname, '..', '..', '.uibuild'));
    fs.copySync(path.resolve(__dirname, 'templates'), path.resolve(__dirname, '..', '..', '.uibuild', 'templates'));
    fs.copySync(path.resolve(__dirname, 'public'), path.resolve(__dirname, '..', '..', '.uibuild', 'public'));
    fs.copySync(path.resolve(__dirname, 'locales'), path.resolve(__dirname, '..', '..', '.uibuild', 'locales'));
    console.info('Theme installed');
} else console.log('Theme install ignored');