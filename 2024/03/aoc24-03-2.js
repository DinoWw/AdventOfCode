const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/ex2.txt"), "utf8");

const data = input.trim();


const matches = data.matchAll(/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g);

let out = 0;
let doVar = true;

for (const match of matches) {
   console.log(match)
   console.log(match.index)
   if(match[0] == "don't()"){
      doVar = false;
      continue;
   }
   else if(match[0] == "do()"){
      doVar = true;
      continue
   }
   if(doVar){
      out += parseInt(match[1]) * parseInt(match[2]);
   }
}

console.log(out)