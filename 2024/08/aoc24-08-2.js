const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim().split('\n').map(line => line.trim().split(""));

const towers = {};

data.forEach((line, y) => {
   line.forEach((el, x) => {
      if(el == '.')
         return;
      if(towers.hasOwnProperty(el)){
         towers[el].push([x, y]);
      }
      else{
         towers[el] = [[x, y]];
      }      
   })
})


function vecSum(v1, v2){
   return [v1[0]+v2[0], v1[1]+v2[1]]
}
function vecMul(v1, x){
   return [v1[0]*x, v1[1]*x]
}


const antinodes = new Set();
const w = data[0].length;
const h = data.length; 
const isWithinBounds = (vec) => {
   return vec[0] >= 0 && vec[0] < w && vec[1] >= 0 && vec[1] < h;
}



for(towerSet of Object.values(towers)) {
   const pairs = towerSet.map( (v, i) => towerSet.slice(i + 1).map(w => [v, w]) ).flat();

   for(const pair of pairs){
      const dV = [pair[1][0] - pair[0][0], pair[1][1] - pair[0][1]];

      let p1 = vecSum(pair[0], vecMul(dV, 1));
      for(let i = 1; isWithinBounds(p1); p1 = vecSum(pair[0], vecMul(dV, ++i))){
         antinodes.add(JSON.stringify(p1));  // kinda ugly
      }
      p1 = vecSum(pair[0], vecMul(dV, 0));
      for(let i = 0; isWithinBounds(p1); p1 = vecSum(pair[0], vecMul(dV, --i))){
         antinodes.add(JSON.stringify(p1));  // kinda ugly
      }
   }
}

console.log(antinodes.size);

