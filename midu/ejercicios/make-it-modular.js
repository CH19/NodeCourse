const myModule = require('./my-module');
const path = process.argv[2] ?? '.';
const fileExtension = process.argv[3] ?? 'js';
myModule(path, fileExtension, (err, datas)=> {
    if(err){
        return    console.error(err)
    }
    return  datas.forEach(data => console.log(data));
});
// console.log(process.argv);