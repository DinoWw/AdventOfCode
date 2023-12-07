 
const input = ``;

const test = `16,1,2,0,4,2,7,1,2,14`;


let arr = test.split(',').map(x => parseInt(x));
let avg = Math.round(arr.reduce((sum, n) => sum + n) / arr.length);

const output = arr.map(x => Math.abs(x - avg)).reduce((sum, n) => sum +n)



console.log(avg, output);