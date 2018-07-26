const glob = require('glob')
const fs = require('fs')
const path = require('path')

let indexContent = ''

const addRequireVendorFile = (path) => {
    indexContent = indexContent.concat(`require('${path}')\n`)
}

const addRequireAppFiles = (pattern) => {
    glob.sync(pattern, {
        cwd: path.resolve(__dirname, '../src')
    }).forEach(filePath => {
        indexContent = indexContent.concat(`require('${'./'.concat(filePath)}')\n`)
    });
}

[
    'bootstrap/dist/css/bootstrap.min.css'
].forEach(addRequireVendorFile);

[
    'app/**/*.module.js',
    'app/**/*.controller.js',
    'app/**/*.route.js',
    'app/**/*.service.js',
    'app/**/*.directive.js',
    'app/**/*.component.js',
    'app/**/*.component.js'
].forEach(addRequireAppFiles);

fs.writeFile(path.resolve(__dirname, '../src/index.js'), indexContent, {
    flag: 'w'
}, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});