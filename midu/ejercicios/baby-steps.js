const nums = process.argv.slice(2);

function sumTotal(){
    const newnums = nums.map(num => Number(num));
    return newnums.reduce((e, i )=>  e + i, 0);
}
console.log(sumTotal());