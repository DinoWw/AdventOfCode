const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim();//.split('\n');


const matches = data.matchAll(/mul\(([0-9]+),([0-9]+)\)/g);

let out = 0;

for (const match of matches) {
   out += parseInt(match[1]) * parseInt(match[2]);
}

console.log(out)