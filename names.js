const fs = require('fs/promises');
const names = [
    {
        nombre: 'Luis Rinascente',
        year: '5to año',
        position: 'Candidato a presidente'
    },
    {
        nombre: 'Daniel Palencia',
        year: '3ero B',
        position: 'Candidato a vicepresidente',
    },
    {
        nombre: 'Valentina Zapata',
        year: '4to Año',
        position: 'Jefe de Campaña',
    },
    {
        nombre: 'Mariana Dum',
        year: '3er Año',
        position: 'Jefe de Prensa',
    },
    {
        nombre: 'Marie Rangel',
        year: '4to Año',
        position: 'Coordinador de finanzas',
    },
    {
        nombre: 'Francesco Falco',
        year: '3er Año',
        position: 'Coordinador de Comunicación',
    },
    {
        nombre: 'Renata',
        year: '1er año',
        position: 'Organizador de Asuntos Electorales',
    },
    {
        nombre: 'Fabiano Fawcett',
        year: '5to año',
        position: 'Estratega Politico',
    },
    {
        nombre: 'Juan Bastidas',
        year: '3er Año',
        position: 'Jefe de delegación',
    },

]
let text = ''
for(let estudiante of names){
    let nombre = estudiante.nombre.split(' ');
    if(nombre[1] == 'Rangel' || nombre[1] == 'Rinascente' || nombre[1] == 'Suarez' || nombre[1] == 'Zapata'){
    }else{
        text +=`
Holi ${nombre[0]} espero que te encuentres bien
Te escribo con referencia a la actividad que les mencione que iba a estar haciendo ${'camimun'.toUpperCase()} a finales de este mes. Ya abrieron inscripcciones
Por tu desempeño en estos ultimos mun y en la actividad te considero con la experiencia para participar
Como sabes seremos un gabinete electoral y yo te considero para participar con el cargo de *${estudiante.position}*
El tema de mas detalles sobre que va consistir la actividad lo estaremos hablando proximamente por ahora
Cuentame que te parece

-------
        
        `;
    };
}
console.log(text);
fs.writeFile('nensaje.md', text );