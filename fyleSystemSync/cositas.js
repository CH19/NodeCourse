const fs = require('fs');

fs.writeFileSync('index.html', 'holi');

// fs.renameSync(__filename, 'cositas.html');

fs.writeFileSync(__dirname + 'sexo.html', 'madre mia willy');

const estats = fs.stat(__dirname, (err)=>{
    console.log(err);
})