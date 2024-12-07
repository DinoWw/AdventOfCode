const { doesNotReject } = require("assert");
const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

let [rules, updates] = input.trim().split('\r\n\r\n');
rules = rules.split('\n').map( l => l.split("|").map(n => parseInt(n)));
updates = updates.split('\n').map(l => l.split(",").map(n => parseInt(n)));

function middle(arr){
    return arr[Math.floor(arr.length/2)];
}


inverseRuleDict = {};

for(let rulePair of rules){
    if(inverseRuleDict[rulePair[1]] == undefined){
        inverseRuleDict[rulePair[1]] = []
    }
    inverseRuleDict[rulePair[1]].push(rulePair[0]);
}


let out = 0;

for(const update of updates){
    let ordered = true;
    let left = new Set();
    let forbidden = new Set();
    for(let n of update){
        if(forbidden.has(n)){
            ordered = false;
            break;
        }
        
        left.add(n);
        if(inverseRuleDict[n] == undefined){
            continue;
        }
        // else
        inverseRuleDict[n].forEach(f => {
            forbidden.add(f);
        });
    }

    if(ordered){
        out += middle(update);
    }
}

console.log(out)

