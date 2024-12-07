const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "/in.txt"), "utf8");

let [rules, updates] = input.trim().split('\r\n\r\n');
rules = rules.split('\n').map( l => l.split("|").map(n => parseInt(n)));
updates = updates.split('\n').map(l => l.split(",").map(n => parseInt(n)));

function middle(arr){
    return arr[Math.floor(arr.length/2)];
}

function order(update){

    let ordered = []

    let leftOf = {}

    for(let n of update){
        if(inverseRuleDict[n] == undefined){
            leftOf[n] = new Set();
            continue;
        }
        // else
        leftOf[n] = new Set(inverseRuleDict[n].filter((k) => update.includes(k)));
    }
    
    while(Object.keys(leftOf).length != 0){
        for(let k in leftOf){
            // find n with leftOf = []
            // remove n form all other leftOfs
            if(leftOf[k].size != 0)
                continue;

            ordered.push(parseInt(k));
            delete leftOf[k];

            for(let k2 in leftOf){
                leftOf[k2].delete(parseInt(k));
            }
            break;
        }
    }
        
    console.log(ordered)

    return ordered;

}


inverseRuleDict = {};
ruleDict = {};

for(let rulePair of rules){
    if(inverseRuleDict[rulePair[1]] == undefined){
        inverseRuleDict[rulePair[1]] = []
    }
    if(ruleDict[rulePair[0]] == undefined){
        ruleDict[rulePair[0]] = [];
    }
    ruleDict[rulePair[0]].push(rulePair[1]);
    inverseRuleDict[rulePair[1]].push(rulePair[0]);
}


let out = 0;

for(const update of updates){
    let ordered = true;
    let left = new Set();
    let forbidden = new Set();
    for(let i = 0; i < update.length; i++){
        n = update[i];
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

    if(!ordered){
        out += middle(order(update));
    }
}

console.log(out)

