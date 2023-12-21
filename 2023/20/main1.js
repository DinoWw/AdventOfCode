const input = `%cg -> mt, hb
%sp -> xm
%nr -> hf, mt
broadcaster -> tl, gd, zb, gc
&qz -> qn
%df -> hd
%vg -> rm, kx
%gm -> mt, md
%ls -> hc
%lq -> zq, fx
&zd -> bz, kg, zb, lf, sq, zk, jx
%lz -> mt
%sq -> zk
%zn -> kx, tc
&zq -> mb, hc, qz, ql, tl, ls
&mt -> zm, tt, mh, gd, md
%lm -> mb, zq
%hf -> mt, sm
%hb -> mh, mt
%rm -> kx
%gc -> kx, sp
&cq -> qn
%mh -> jt
%zm -> nr
%xm -> kx, ld
&jx -> qn
&qn -> rx
%mp -> qt, kx
%zk -> vj
%hd -> mp, kx
%tl -> zq, hl
%zb -> zd, ph
%cl -> zd
&tt -> qn
%ld -> zn
%js -> lq, zq
%sm -> mt, lz
%qt -> vg, kx
%md -> cg
%vj -> bz, zd
%qs -> zd, fs
%mb -> ps
&kx -> cq, gc, sp, df, ld
%hc -> lm
%tc -> df, kx
%ps -> js, zq
%fs -> qc, zd
%hl -> jj, zq
%bz -> qs
%jj -> zq, ql
%ql -> ls
%ph -> kg, zd
%qc -> cl, zd
%lf -> sq
%kg -> lf
%fx -> zq
%jt -> zm, mt
%gd -> gm, mt`;

class Module{
	constructor(name, signalQ){
		this.name = name;
		this.signalQ = signalQ;
		this.ins = {};
		this.to = [];
	};

	connectInput(from){
		this.ins[from] = false;
	}

	connectOutput(...to){
		this.to.push(...to);
	}
	
}

class Conj extends Module {
	constructor(name, signalQ){
		super(name, signalQ);
	};
	
	recieve(from, signal){
		this.ins[from] = signal;
		this.send();
	}
	
	send(){
		this.to.forEach(out => this.signalQ.push([this.name, out, !Object.values(this.ins).every(x => x)]));
	}


}

class FlFl extends Module {
	constructor(name, signalQ){
		super(name, signalQ);
		this.state = false;
	};
	
	recieve(from, signal){
		if(signal == false){
			this.flip();
			this.send();
		}
	}

	flip(){
		this.state = !this.state;
	}
	
	send(){
		this.to.forEach(out => this.signalQ.push([this.name, out, this.state]));
	}


}

class Broadcast extends Module {
	constructor(name, signalQ){
		super(name, signalQ);
	};
	
	recieve(from, signal){
		this.state = signal;
		this.send();
	}

	send(){
		this.to.forEach(out => this.signalQ.push([this.name, out, this.state]));
	}


}

class Output extends Module {
	constructor(name, signalQ){
		super(name, signalQ);
	};
	
	recieve(from, signal){
	}


}


const test = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`;



let signalQueue = [];

// initialize modules into a dict with module name keys
const definitions = input.split('\n').map(l => (x => [x[0], x[1].split(',').map(to => to.slice(1))])(l.split(' ->')));
//definitions.push(['ooutput', []])

const instantiator = {
	'b': x => new Broadcast(x, signalQueue),
	'%': x => new FlFl(x, signalQueue),
	'&': x => new Conj(x, signalQueue),
	'o': x => new Output(x, signalQueue),

}

const modules = {};
definitions.forEach(d => {
	let mod = instantiator[d[0][0]](d[0].slice(1));
	d[1].forEach(con => {
		mod.connectOutput(con);
	});
	modules[d[0].slice(1)] = mod;
});

Object.values(modules).forEach(mod => mod.to.forEach(out => {
	console.log(out);
	if(Object.keys(modules).every(a => a != out)){
		modules[out] = instantiator.o(out);
	}
	modules[out].connectInput(mod.name);
}));



let count = {
	true: 0,
	false: 0
}


// q is initialized to a low pulse into the broadcast moddule to simulate the button

for(let i = 0; i < 1000; i++){
	signalQueue.push(['button', 'roadcaster', false]);

	while(signalQueue.length != 0){

		// prcessing format [from, to, signal]
		let processing = signalQueue.splice(0, 1)[0];
		count[processing[2]] += 1;

		//console.log(processing)

		modules[processing[1]].recieve(processing[0], processing[2]);


	}
}


const output = count.true * count.false;


console.log(count.true, count.false, output);



