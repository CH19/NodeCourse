const fs = require('node:fs');
const path = require('node:path');
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const modelos = [
    'del Colegio Maria Santisima',
    'del Colegio Andres Bello',
    'de la Universidad Antonio Michelena'
]


const things = fs.readFileSync(path.resolve(__dirname, 'Invitacion_Modelos.docx'), 'binary');

const zip = new PizZip(things)

// console.log(zip);

modelos.forEach(modelo => {
    const name = modelo.split(' ')
    const fullName = `${name[name.length - 2]}_${name[name.length - 1]}`
    let doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    })
    // console.log(doc);
    doc.render({
        'delegacion': modelo,
    })
    const buf = doc.getZip().generate({
        type: 'nodeBuffer',
        compression: 'DEFLATE',
    })
    try{
        fs.writeFileSync(path.resolve(__dirname, `Invitacion_${fullName}.docx`), buf);
    
    }catch{
        console.error('fue la lectura' + fullName)
    }
})

