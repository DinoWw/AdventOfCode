const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim();

const disc = Array.from(data).map(x => parseInt(x))


let out = 0;
let cachedSize = disc.pop();
disc.pop();

let position = 0;
let leftFileID = 0;
let rightFileID = Math.ceil( disc.length/2 );

for(let i = 0; i < disc.length; i++){
   // console.log("\ndisc[i]", disc[i]);
  if(i%2 == 0){
   let fileSize = disc[i];
    out += value( position, leftFileID, fileSize );

    leftFileID ++;
    position += fileSize;
    continue;
  }

  let freeSpace = disc[i];
  do{
    let leftoverSpace = freeSpace - cachedSize;
    if(leftoverSpace < 0){
      out += value(position, rightFileID, freeSpace);

      cachedSize -= freeSpace;
      position += freeSpace;
      freeSpace = 0;
    }
    else {
      out += value(position, rightFileID, cachedSize);
      position += cachedSize;
      freeSpace = leftoverSpace;
      rightFileID --;
      cachedSize = disc.pop();
      disc.pop();
      // console.log("cachedSize", cachedSize);
    }
   //  console.log("freeSpace ", freeSpace)
  }
  while(freeSpace != 0)
}

out += value(position, rightFileID, cachedSize);


console.log(out);



function value(startPosition, sectorID, size){
   let value = sectorID*(startPosition*size + (size)*(size-1)/2);
   // console.log("value of ( startPosition, sectorID, size ) (", startPosition, sectorID, size, ") is", value);
   return value;
}

