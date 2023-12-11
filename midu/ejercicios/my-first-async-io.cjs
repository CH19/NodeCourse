//@ts-check
'use strict';
const fs = require('node:fs');

const path = process.argv[2];
const readFile2 = () => {
    return  fs.readFile(path,'utf-8', (err, data)=> {
        if(err){
            console.error(err);
            process.exit(1);
        };
        console.log(data.split('\n').length - 1) ;
    })

}

// console.log(readFile2())
// readFile2()
readFile2()