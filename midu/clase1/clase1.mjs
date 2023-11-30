// probando global this
// const sum = require('./sum');
import { multipli } from './emca.mjs';


globalThis.console.log('hola mundo');
// patron de diseño modulo 
// globalThis.console.log(sum.sum(2,4));
console.log(multipli(2,10));
// si usamos mjs en la extension de nuestro archivo podemos usar ecmascript modules 