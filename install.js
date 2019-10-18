const
    fs = require('fs-extra'),
    path = require('path');

console.info('Installing theme default');
fs.ensureDirSync(path.resolve(__dirname, '..', '..', '.uibuild'));
fs.copySync(path.resolve(__dirname, 'templates'), path.resolve(__dirname, '..', '..', '.uibuild', 'templates'));
fs.copySync(path.resolve(__dirname, 'public'), path.resolve('..', '..', '.uibuild', 'public'));
fs.copySync(path.resolve(__dirname, 'locales'), path.resolve('..', '..', 'locales'));
console.info('Theme installed');