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

      const p1 = vecSum(pair[0], vecMul(dV, 2));
      const p2 = vecSum(pair[0], vecMul(dV, -1));
      if(isWithinBounds(p1))
         antinodes.add(JSON.stringify(p1));  // kinda ugly
      if(isWithinBounds(p2))
         antinodes.add(JSON.stringify(p2));
   }
}

console.log(antinodes.size);

