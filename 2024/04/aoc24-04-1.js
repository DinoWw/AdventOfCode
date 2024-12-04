const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input
.trim()
.split('\r\n')
.map(line => line.split(""));

const searchWord = "XMAS"

function checkSpace(x, y){
   let matches = 0;

   if(data[x][y] != searchWord[0]){
      return 0;
   }

   for(let dir of [[1, 0], [1, 1], [0,  1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]]){
      let dirValid = true;       //  could use for else ?
      for(let i = 0; i < searchWord.length; i++){
         const char = searchWord[i];
         try{  //bad way to handle edge cases
            if(data[x + dir[0] * i][y + dir[1] * i] != char){
               dirValid = false;
               break;
            }
         }
         catch(e){
            dirValid = false;
            break;
         }
      }
      if(dirValid){
         matches += 1;
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


