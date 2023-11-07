'use strict'
// un modulo no es mas que una funcion que se crea en otro archivo y se desea exportar. Ejemplo
function sum(num1,num2){
    return num1 + num2;
}
export function mulitplicar(num1,num2){
    return num1 * num2;
}
// forma clasica de exportar modulos 
module.exports = sum;

// otra forma de exportar modulos usano la estructuracón de objetos 
module.exports = {
    mulitplicar
}