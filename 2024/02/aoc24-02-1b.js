const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

const data = input.trim().split('\n')
.map(line => line.split(" ").map(x => parseInt(x)));


function toDelta(arr){
    let d = [];
    for(let i = 1; i < arr.length; i++){
        d.push(arr[i] - arr[i-1]);
    }
    return d;
}

function isSafe(reportD){
    let sign = Math.sign(reportD[0]);

    for(let i = 0; i < reportD.length; i++){
        if(reportD[i]*sign <= 0 || reportD[i] > 3){
            return false;
        }
    }

    return true;
}


const out = data.map(toDelta).filter(x => isSafe(x)).length


console.log(out);