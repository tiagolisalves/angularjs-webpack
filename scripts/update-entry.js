const glob = require('glob')
const fs = require('fs')
const path = require('path')

let indexContent = ''

const addRequireFiles = (pattern) => {
    glob.sync(pattern, {cwd : path.resolve(__dirname, '../src')}).forEach(filePath => {
        indexContent = indexContent.concat(`require('${'./'.concat(filePath)}')\n`)
    });
}

addRequireFiles('app/**/*.module.js')
addRequireFiles('app/**/*.controller.js')
addRequireFiles('app/**/*.route.js')
addRequireFiles('app/**/*.service.js')
addRequireFiles('app/**/*.directive.js')
addRequireFiles('app/**/*.component.js')
addRequireFiles('app/**/*.component.js')

fs.writeFile(path.resolve(__dirname, '../src/index.js'), indexContent,{ flag: 'w' }, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 