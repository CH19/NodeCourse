// Usando timeOuts en js 
function saything(message){
    console.log(`Hi ${message}`);
}
function sumar(a,b){
    return console.log(a + b);
}
let num = 0;
// args 
// function, time, args of the callback 
setTimeout(saything, 1000, 'Juan')

setImmediate(saything, 'Pedro');
console.log('Pedro dice algo');
console.log('Pedro dice algo');
console.log('Pedro dice algo');
console.log('Pedro dice algo');


setInterval(sumar, 1500, 2,4)

