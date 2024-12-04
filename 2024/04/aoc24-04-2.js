const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input
.trim()
.split('\r\n')
.map(line => line.split(""));

const searchWord = "MAS"      // hardcoded, whatever

// [[1, 1], [-1, 1], [-1, -1], [1, -1]]

function checkSpace(x, y){
   let matches = 0;
   for(let dirSet of [[[1, 1], [-1, 1], [-1, -1], [1, -1]]/*, [[1, 0], [0,  1], [-1, 0], [0, -1]]*/]){
      let rotCount = 0;
      for(let dir of dirSet){
         try {
            // console.log(data[x - dir[0]][y - dir[1]], data[x][y], data[x + dir[0]][y + dir[1]])
            if(data[x - dir[0]][y - dir[1]] == "M" && data[x][y] == "A" && data[x + dir[0]][y + dir[1]] == "S"){
               if(++rotCount == 2){
                  matches ++;
                  break;
               }
            }
         }
         catch(e){
            break;   // break jer nema sanse bit kriz cim je jedna os prekratka
         }
      }
   }
   return matches;
}


let count = 0;
for(let i = 0; i < data.length; i++){
   for(let j = 0; j < data[0].length; j++){
      count += checkSpace(i, j);
   }
}

console.log(count);


