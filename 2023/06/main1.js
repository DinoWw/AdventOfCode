 
const input = `Time:        51     69     98     78
Distance:   377   1171   1224   1505`



const test = 
`Time:      7  15   30
Distance:  9  40  200`;






let td = test
.split('\n')
.map(
	x => 

		x.slice(11)
		.split(' ')
		.filter(y => y != '')
		.map(q => parseInt(q))
	
	
)

let rez = 1;

for(let i = 0; i < td[0].length; i++){
	let a = td[0][i];
	let b = td[1][i];

	let d = Math.sqrt(a*a-4*b)/2;
	let c = a/2;

	let lb = Math.floor(c-d)+1;
	let ub = Math.ceil(c+d)-1;


	//for some reason, +1 is needed, not by my calculations tho
	rez *= (ub-lb) + 1

}

const output = rez;

console.log(output)