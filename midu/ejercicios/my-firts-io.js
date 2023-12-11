const fs = require('node:fs');
const path = process.argv[2]
const message = process.argv.slice(2);


const writeFiles = () => {
        const newText = message.join(' ')
    fs.writeFileSync('notas.txt', newText)
}
const readFile = () => {
   return  fs.readFileSync(path, 'utf-8').split('\n').length - 1;
}
// writeFiles();
console.log(readFile());