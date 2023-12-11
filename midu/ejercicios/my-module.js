const {readdir}  = require('node:fs');
const {extname} = require('node:path')
module.exports = function(path, extension, callback){
    readdir(path, 'utf-8', (err, files)=> {
        if(err){
            // console.error(err);
            return callback(err, null);  
        }
            const filesFilter = files.filter(file => extname(file) === `.${extension}`);
            callback(null, filesFilter);
        })
}

