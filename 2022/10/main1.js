
const input = "addx 2\naddx 3\nnoop\nnoop\naddx 1\naddx 5\naddx -1\naddx 5\naddx 1\nnoop\nnoop\naddx 4\nnoop\nnoop\naddx 5\naddx -5\naddx 6\naddx 3\naddx 1\naddx 5\naddx 1\nnoop\naddx -38\naddx 41\naddx -22\naddx -14\naddx 7\nnoop\nnoop\naddx 3\naddx -2\naddx 2\nnoop\naddx 17\naddx -12\naddx 5\naddx 2\naddx -16\naddx 17\naddx 2\naddx 5\naddx 2\naddx -30\nnoop\naddx -6\naddx 1\nnoop\naddx 5\nnoop\nnoop\nnoop\naddx 5\naddx -12\naddx 17\nnoop\nnoop\nnoop\nnoop\naddx 5\naddx 10\naddx -9\naddx 2\naddx 5\naddx 2\naddx -5\naddx 6\naddx 4\nnoop\nnoop\naddx -37\nnoop\nnoop\naddx 17\naddx -12\naddx 30\naddx -23\naddx 2\nnoop\naddx 3\naddx -17\naddx 22\nnoop\nnoop\nnoop\naddx 5\nnoop\naddx -10\naddx 11\naddx 4\nnoop\naddx 5\naddx -2\nnoop\naddx -6\naddx -29\naddx 37\naddx -30\naddx 27\naddx -2\naddx -22\nnoop\naddx 3\naddx 2\nnoop\naddx 7\naddx -2\naddx 2\naddx 5\naddx -5\naddx 6\naddx 2\naddx 2\naddx 5\naddx -25\nnoop\naddx -10\nnoop\naddx 1\nnoop\naddx 2\nnoop\nnoop\nnoop\nnoop\naddx 7\naddx 1\naddx 4\naddx 1\nnoop\naddx 2\nnoop\naddx 3\naddx 5\naddx -1\nnoop\naddx 3\naddx 5\naddx 2\naddx 1\nnoop\nnoop\nnoop\nnoop";


//const input = "addx 15\naddx -11\naddx 6\naddx -3\naddx 5\naddx -1\naddx -8\naddx 13\naddx 4\nnoop\naddx -1\naddx 5\naddx -1\naddx 5\naddx -1\naddx 5\naddx -1\naddx 5\naddx -1\naddx -35\naddx 1\naddx 24\naddx -19\naddx 1\naddx 16\naddx -11\nnoop\nnoop\naddx 21\naddx -15\nnoop\nnoop\naddx -3\naddx 9\naddx 1\naddx -3\naddx 8\naddx 1\naddx 5\nnoop\nnoop\nnoop\nnoop\nnoop\naddx -36\nnoop\naddx 1\naddx 7\nnoop\nnoop\nnoop\naddx 2\naddx 6\nnoop\nnoop\nnoop\nnoop\nnoop\naddx 1\nnoop\nnoop\naddx 7\naddx 1\nnoop\naddx -13\naddx 13\naddx 7\nnoop\naddx 1\naddx -33\nnoop\nnoop\nnoop\naddx 2\nnoop\nnoop\nnoop\naddx 8\nnoop\naddx -1\naddx 2\naddx 1\nnoop\naddx 17\naddx -9\naddx 1\naddx 1\naddx -3\naddx 11\nnoop\nnoop\naddx 1\nnoop\naddx 1\nnoop\nnoop\naddx -13\naddx -19\naddx 1\naddx 3\naddx 26\naddx -30\naddx 12\naddx -1\naddx 3\naddx 1\nnoop\nnoop\nnoop\naddx -9\naddx 18\naddx 1\naddx 2\nnoop\nnoop\naddx 9\nnoop\nnoop\nnoop\naddx -1\naddx 2\naddx -37\naddx 1\naddx 3\nnoop\naddx 15\naddx -21\naddx 22\naddx -6\naddx 1\nnoop\naddx 2\naddx 1\nnoop\naddx -10\nnoop\nnoop\naddx 20\naddx 1\naddx 2\naddx 2\naddx -6\naddx -11\nnoop\nnoop\nnoop"

let commands = input.split("\n").map(x => x.split(" "));

commands.forEach((x) => {
	if(x.length == 2){
		x[1] = parseInt(x[1]);
	}
});

//console.log(commands);

let t = 1;
let X = 1;

let result = 0;

for(let command of commands){

	//console.log(t, X, command);


	if(command[0] == "addx"){
		for(let i = 0; i < 2; i++){
			if((t + 20) % 40 == 0){
				result += X * t;
			}
			t += 1;
		}

		X += command[1];
	}
	else if(command[0] == "noop"){
		if((t + 20) % 40 == 0){
 			result += X * t;
		}
		t += 1;
	}
}


console.log(result);


