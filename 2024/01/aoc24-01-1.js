const fs = require("fs");
const data = fs.readFileSync("in.txt", "utf8");

const arrays = [[], []];

data.trim().split('\n')
.map(line => line.split("   ").map(x => parseInt(x)))
.forEach((pair) => {
    arrays[0].push(pair[0]);
    arrays[1].push(pair[1]);
})

arrays.map(arr => arr.sort());


const out = arrays[0].reduce((acc, el, i) => {
    return acc + Math.abs(el - arrays[1][i])
}, 0);

console.log(out);