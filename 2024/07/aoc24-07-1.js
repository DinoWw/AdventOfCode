const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim().split('\n').map(line => line.split(": ")).map(x => {return {value: parseInt(x[0]), numbers: x[1].split(" ").map(y => parseInt(y))}});



function canEqual(result, values){

   let [v1, v2] = [values[0], values[1]];
   if(v1 > result){
      return false;
   }
   if(v2 == undefined){
      return v1 == result;
   }

   values.splice(0, 2, v1 + v2)
   if( canEqual(result, values) ){
      return true;
   }
   values.splice(0, 1, v1 * v2)
   if( canEqual(result,  values) ){
      return true;
   }
   // return array to original state
   values.splice(0, 1, v1, v2);
   return false;
}


let out = 0;

for(let test of data){
   if(canEqual(test.value, test.numbers)){
      out += test.value;
   }
}

console.log(out)