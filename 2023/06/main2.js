 
const input = `Time:        51     69     98     78
Distance:   377   1171   1224   1505`



const test = 
`Time:      7  15   30
Distance:  9  40  200`;






let td = input
.split('\n')
.map(
	x => 
	parseInt(
		x.slice(11)
		.split(' ')
		.filter(y => y != '')
		.reduce((sum, q) => sum + q)
	)
	
)

let a = td[0];
let b = td[1];

let d = Math.sqrt(a*a-4*b)/2;
let c = a/2;

let lb = Math.floor(c-d)+1;
let ub = Math.ceil(c+d)-1;


const output = (ub-lb) + 1


console.log(output)