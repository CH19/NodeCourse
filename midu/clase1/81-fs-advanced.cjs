// const { rejects } = require('node:assert');
// const { fs } = require('node:fs');
const fs = require('node:fs/promises');
const path = require('node:path')
// const { resolve } = require('node:path');

const folder = process.argv[2] ?? '.';

// async function ls(){
//     try{
//         const files = await fs.readdir(folder);
//         const newOrder = await new Promise((resolve, rejects) => {
//             const arr = files.map(file => {
//                 const cositas = async () =>{
//                     const stat = await fs.stat(file);
//                     const {size, atime} =  stat.size;
//                     return {'size': size, 'atime': atime};
//                 }
//                 return {'file': file, ...cositas()};
//             })
//             resolve(arr);
//         });
//         console.log(newOrder);
//     }catch(e){
//         console.error(e);
//     }
// }
// ls()

async function ls(directory){
    let files;
    try{
        files = await fs.readdir(directory)
    }catch{
        console.error('no se ha podido leer los files');
        process.exit(1);
    }
    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let fileStats;
        // recordar el divide y venceras con los try catch 
        try{
          fileStats = await fs.stat(filePath);   
        }catch{
            console.error('las stats no se encuentran');
            process.exit(1);
        }
        const isDirectory = fileStats.isDirectory();
        const fileType = isDirectory ? 'd' : '-';
        const fileSize = fileStats.size;
        const fileModifed = fileStats.mtime.toLocaleString();

        return `${fileType} ${file}    ${fileSize}        ${fileModifed}`
    })
    const filesInfo =  await Promise.all(filesPromises);
    filesInfo.forEach(newfile => console.log(newfile));

}
ls(folder)