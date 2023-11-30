// usando el modulo os 
const os = require('node:os');
console.log('Informacion del sistema operativo');
console.log('--------------------------------');
// informacion de nuestro sistema operativo 
console.log('Nombre del sistema operativo' + os.platform());

// version del sistema operativo 
console.log('Version del sistema operativo' + os.version());

// arquitectura de nuestro sistema 
console.log('Arquitectura' +  os.arch());

// CPU's disponibles 
console.log('CPUs', os.cpus());

// memoria libre 
console.log('memoria libre', os.freemem() /1040 / 1040);

console.log('memoria total', os.totalmem() /1040 / 1040);

console.log('uptime tiempo prendido', os.uptime() / 60 / 60);