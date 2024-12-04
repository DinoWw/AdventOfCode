const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim().split('\n')
.map(line => line.split(" ").map(x => parseInt(x)));


function isSafe(report){
    let dir = -1;
    if(report[0] < report[1]){
        dir = 1;
    }

    for(let i = 1; i < report.length; i++){
        const currLevel = report[i];
        const d = currLevel - report[i-1];
        const dirD = d*dir;
        if(dirD <= 0 || dirD > 3){
            return false;
        }
    }
    // else
    return true;    
}

const out = data.filter(x => isSafe(x)).length


console.log(out);