
//const input = "Monkey 0:\n  Starting items: 73, 77\n  Operation: new = old * 5\n  Test: divisible by 11\n    If true: throw to monkey 6\n    If false: throw to monkey 5\n\nMonkey 1:\n  Starting items: 57, 88, 80\n  Operation: new = old + 5\n  Test: divisible by 19\n    If true: throw to monkey 6\n    If false: throw to monkey 0\n\nMonkey 2:\n  Starting items: 61, 81, 84, 69, 77, 88\n  Operation: new = old * 19\n  Test: divisible by 5\n    If true: throw to monkey 3\n    If false: throw to monkey 1\n\nMonkey 3:\n  Starting items: 78, 89, 71, 60, 81, 84, 87, 75\n  Operation: new = old + 7\n  Test: divisible by 3\n    If true: throw to monkey 1\n    If false: throw to monkey 0\n\nMonkey 4:\n  Starting items: 60, 76, 90, 63, 86, 87, 89\n  Operation: new = old + 2\n  Test: divisible by 13\n    If true: throw to monkey 2\n    If false: throw to monkey 7\n\nMonkey 5:\n  Starting items: 88\n  Operation: new = old + 1\n  Test: divisible by 17\n    If true: throw to monkey 4\n    If false: throw to monkey 7\n\nMonkey 6:\n  Starting items: 84, 98, 78, 85\n  Operation: new = old * old\n  Test: divisible by 7\n    If true: throw to monkey 5\n    If false: throw to monkey 4\n\nMonkey 7:\n  Starting items: 98, 89, 78, 73, 71\n  Operation: new = old + 4\n  Test: divisible by 2\n    If true: throw to monkey 3\n    If false: throw to monkey 2";

const input = "Monkey 0:\n  Starting items: 79, 98\n  Operation: new = old * 19\n  Test: divisible by 23\n    If true: throw to monkey 2\n    If false: throw to monkey 3\n\nMonkey 1:\n  Starting items: 54, 65, 75, 74\n  Operation: new = old + 6\n  Test: divisible by 19\n    If true: throw to monkey 2\n    If false: throw to monkey 0\n\nMonkey 2:\n  Starting items: 79, 60, 97\n  Operation: new = old * old\n  Test: divisible by 13\n    If true: throw to monkey 1\n    If false: throw to monkey 3\n\nMonkey 3:\n  Starting items: 74\n  Operation: new = old + 3\n  Test: divisible by 17\n    If true: throw to monkey 0\n    If false: throw to monkey 1";

let monkeyStats = input
.split("\n\n")
.map(m => m.split("\n")
	.filter((y, i) => i != 0 && i != 6)
	.map(x => x.trim())
	.map((y, i) => 
		i == 0 ? y.slice(16).split(", ").map(z => parseInt(z)) : 
		i == 1 ? y.slice(11) : 
		i == 2 ? parseInt(y.slice(19)) : 
		i == 3 ? parseInt(y.slice(25)) :
		parseInt(y.slice(26))
	)
	
);


let monkeys = [];

for(let monkeyStat of monkeyStats){
	monkeys.push(new Monkey(monkeyStat[1], monkeyStat[2], [monkeyStat[3], monkeyStat[4]], ...monkeyStat[0]));
}
for(let i = 0; i < 10000; i++){
	for(let monkey of monkeys){
		monkey.processItems(monkeys, false);
	}
	console.log(monkeys[0].items[0]);
}


console.log(monkeys);



