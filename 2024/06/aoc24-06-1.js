const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim().split('\n').map(line => line.trim().split(""));
function transpose(matrix) {
  const rows = matrix.length, cols = matrix[0].length;
  const grid = [];
  for (let j = 0; j < cols; j++) {
    grid[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[j][i] = matrix[i][j];
    }
  }
  return grid;
}
const grid = transpose(data);    // transpose

grid.unshift(Array.from(new Array(grid[0].length), el => "z"));
grid.push(Array.from(new Array(grid[0].length), el => "z"));
grid.forEach(element => {
    element.unshift("z");
    element.push("z");    
});


// rotate right [x, y] -> [y, -x]

const x = grid.findIndex(line => line.some(e => e == "^"));
const y = grid[x].findIndex(e => e == "^");

let pos = [x, y]
let dir = [0, -1];
grid[ pos[0] ][ pos[1] ] = "X";

while(true){
    let nextPos = [ pos[0] + dir[0] , pos[1] + dir[1] ];

    // displayGrid(grid);
    while(grid[nextPos[0]][nextPos[1]] == "#"){
        dir = [-dir[1], dir[0]];
        nextPos = [ pos[0] + dir[0] , pos[1] + dir[1] ];
    }

    if(grid[nextPos[0]][nextPos[1]] == "z"){
        break;
    }
    // else 
    grid[nextPos[0]][nextPos[1]] = "X";
    
    pos = nextPos;
    
}


const out = grid.reduce((count, line) => count + line.reduce((localCount, el) => localCount + (el == "X" ? 1 : 0), 0), 0);

displayGrid(grid);
console.log(out)






function displayGrid(grid){
    const tGrid = transpose(grid);
    tGrid.forEach(line => {
        console.log(line.reduce((str, el) => str + el, ""))
    });
}
