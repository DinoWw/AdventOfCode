const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim();

const disc = Array.from(data).map(x => parseInt(x))

const blocks = [];
const spaces = [];

let offset = 0;
disc.forEach((el, index) => {
   let blockIndex = Math.floor(index/2);
   if(index % 2 == 0){
      blocks.push( {index: blockIndex, position: offset, size: el, moved: false} );
   }
   else{
      spaces.push( {position: offset, size: el} );
   }
   offset += el;
})

let out = 0;
for(let i = blocks.length - 1; i >= 0; i--) {
   const block = blocks[i];
   for(const space of spaces){
      if(space.position > block.position)
         break;

      if(block.size <= space.size){
         inserted = true;
         out += value(space.position, block.index, block.size);
         space.size -= block.size
         space.position += block.size;
         block.moved = true;
         spaces[block.index-1].size += block.size
         break;
      }
   }
}

for(const block of blocks) {
   if(block.moved)
      continue;
   out += value(block.position, block.index, block.size);
}

console.log(out);




function value(startPosition, sectorID, size){
   let value = sectorID*(startPosition*size + (size)*(size-1)/2);
   // console.log("value of ( startPosition, sectorID, size ) (", startPosition, sectorID, size, ") is", value);
   return value;
}



