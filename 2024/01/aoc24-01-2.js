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


let j = 0;
const out = arrays[0].reduce((acc, el, i) => {
    if(el < arrays[1][j]){
        return acc;
    }
    let count = 0;
    while(el > arrays[1][j]){
        j ++;
    }
    while(el == arrays[1][j]){
        count ++;
        j ++;
    }
    return acc + count * el;
}, 0);

console.log(out);