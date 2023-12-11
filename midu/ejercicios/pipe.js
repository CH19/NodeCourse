
function sum(a){
    return a + 10;
}
// Number.prototype.sum();
function multiply(a){
    return a * 2;
}
function printi(num){
    return `Mi numero final es ${num}`;
}

function final(num){
    return (num2)=> {
        const total = num + num2
        return (operation) => {
            let result = 0
            switch(operation){
                case 'sum': 
                    result = total + 10
                    break;
                case 'rest':
                    result = total - 3;
                    break;
                case 'multi':
                    result = total * 2;
                    break;
                default: 
                    result = 1;
                    break;
                }
                return console.log(`mas nada con ${result}`);
    }
}
}
const pipe = (...fns) => (x) => fns.reduce((v,i) => i(v), x);


console.log(pipe(sum, multiply, printi)(2))
final(100)(200)('sum')

// const num1 = Number(2).sum(num1);
// console.log(num1);