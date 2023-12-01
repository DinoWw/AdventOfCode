
//const input = "abaccccccccccccccaaaccccaaaaaaaaaaaaaccccccaacccccccccccccccccccccccccccccaaaaaa\nabaaccaacccccccccaaaaaccccaaaaaaaaaaaaaccccaaacccccccccccccccccccccccccccccaaaaa\nabaaccaaacccccccaaaaaacccaaaaaaaaaaaaaacaaaaaaaaccccccccaacccccccccccccccccccaaa\nabcaaaaaaaacccccaaaaaacccaaaaaaaaaaaaaacaaaaaaaacccccccaaaacccccccccccccccccaaaa\nabcaaaaaaaaccccccaaaaaccaaaaaaaaccaaaaaccaaaaaaccccccccaaaaccaaaccccccccccccaaac\nabccaaaaaacccccccaaaaccaaaaaaaaaacaaaacccaaaaaacccccccccakkaaaaaacccccccccccaacc\nabccaaaaaacccccccccccccaaaaaaaaaaccccccccaaaaaaccccccckkkkkkkaaacccccccccccccccc\nabccaaaaaaccccccccccccccccaaaaaaaaaccccccaacaaacccccckkkkkkkkkaccccccaccaaaccccc\nabccaacaaacccccaaccccccccaaacacaaaacaaccccccccccccccakkkoppkkkkicccccaaaaaaccccc\nabccccccccccccaaaccccccccaacccccaaaaaaccccccccccccccjkkooppppkiicccccccaaaaccccc\nabccccccccccaaaaaaaaccccccccccaaaaaaaccccccccccccccjjjooopppppiiiicccccccaaacccc\nabaaacccccccaaaaaaaacccccccaacaaaaaaccccccccccccccjjjjooouuppppiiiiiicccccaacccc\nabaaaccccccccaaaaaaccccccccaaaccaaaaacccccccccccjjjjjooouuuupppiiiiiiiiccccacccc\nabaaaaaacccccaaaaaacccccaaaaaaaaaacaaaccccccccjjjjjjooouuuuuupppppiiiiiicccccccc\nabaaaaaacccccaaaaaacccccaaaaaaaaaacccccccccccjjjjjooooouuxxuupppppqqqijjjccccccc\nabaaaacccccaaaaccaaccccccaaaaaaccccccccccccciijjnooooouuuxxxuuupqqqqqqjjjdddcccc\nabaaaaaccaaaaaaccacccccccaaaaaaccccccccccaaiiiinnootttuuxxxxuuvvvvvqqqjjjdddcccc\nabaaaaaccaaaaaacaaaccaaccaaaaaaccccccccccaaiiinnnntttttuxxxxxvvvvvvqqqjjjdddcccc\nabaaccacccaaaaacaaaaaaaccaaccaaccccccccccaaiiinnnttttxxxxxxxyyyyyvvqqqjjjdddcccc\nabcccccccaaaaacccaaaaaaccccccaaaaacccccccaaiiinnntttxxxxxxxyyyyyvvvqqqjjjddccccc\nSbcccccccaaaaacaaaaaaaaccccccaaaaaccccccccciiinnntttxxxEzzzzyyyyvvqqqjjjdddccccc\nabcccccccccccccaaaaaaaaaccccaaaaaaccccccccciiinnnntttxxxxyyyyyvvvvqqjjjdddcccccc\nabcccccccccccccaaaaaaaaaacccaaaaaacccccccccciiinnnttttxxxyyyyyvvvqqqjjjdddcccccc\nabccccccccccccccccaaaaaaacccaaaaaaccccccccccciiinnnntttwyyywyyyvvrrrkkjdddcccccc\nabcccccccccccccccaaaaaaaaccccaaaccccccccccccciiihnnnttwwwywwyyywvrrrkkkeeccccccc\nabcccccccccccccccaaaaaaaaccccccccccccccccccccchhhmmmsswwwwwwwwwwwvrrkkkeeccccccc\nabcccccccaacccccccacaaacccccccccccccccccccaacchhhhmmsswwwwwswwwwwrrrkkkeeccccccc\nabcccccccaaaccacccccaaacccccccccccccccaaccaaccchhhmmssswwwssrrwwwrrrkkkeeccccccc\nabcccccccaaaaaaacccccccccccaaaccccccccaaaaaaccchhhmmssssssssrrrrrrrrkkkeeaaacccc\nabcccccaaaaaaaaccccccccccccaaaaccccccccaaaaaaachhhmmmssssssllrrrrrrkkkeeeaaacccc\nabccccaaaaaaaaaccccccccccccaaaacccccccccaaaaacchhhmmmmsssllllllllkkkkkeeeaaacccc\nabccccaaaaaaaaaccccccccccccaaacccccccccaaaaacccchhhmmmmmlllllllllkkkkeeeeaaccccc\nabcccccccaaaaaaccccccccccaacccccccaaccaaacaacccchhhmmmmmlllgfflllkkffeeeaaaacccc\nabccccccaaaaaaaccccccccccaaaaaaaaaaaaaccccaacccchhhggmmmggggffffffffffeaaaaacccc\nabccaacccaacccaaaaccaccccaaaaaaaaaaaaacccccccccccgggggggggggffffffffffaacccccccc\nabaaaaccaaaccccaaaaaaccccaaaaaacaaaaaaccccccccccccgggggggggaaaaccffccccccccccccc\nabaaaacccccccccaaaaaaccaaaaaaaaaaaaaacccccccccccccccgggaaaaaaaacccccccccccccccca\nabaaaaacccccccaaaaaaaccaaaaaaaaaaaaaacccccccccccccccccaaacccaaaaccccccccccccccaa\nabaaaaacaaaaccaaaaaaaacaaaaaaaaaaaccccccccccccccccccccaaaccccaaaccccccccccaaacaa\nabaaaaacaaaaccaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaaa\nabaaacccaaaaccccaaaccccaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaa";

const input = "Sabqponm\nabcryxxl\naccszExk\nacctuvwj\nabdefghi";

const map = input.split("\n").map(x => x.split("").map(y => y == "S" ? 0 : y == "E" ? 27 : (y.charCodeAt(0) - "a".charCodeAt(0) + 1)));

console.log(map);

let directions = Array(map.length).fill(null).map(x => Array(map[0].length).fill(null).map(y => [false, false, false, false]));

let path = [];
//console.log(directions);


function getZeroPos(field){
	for(let x = 0; x < map.length; x++){
		for(let y = 0; y < map[0].length; y++){
			if(field[x][y] == 0){
				return [x, y];
			}
		}
	}
}




function getPos(x, y, d){
	switch(d){
		case 0:
			return [x+1, y];
		case 1:
			return [x, y+1];
		case 2:
			return [x-1, y];
		case 3:
			return [x, y-1];
		}
}




function getFirstValid(field, x, y){
	for(let i = 0; i < 4; i ++){
	
		let pos = getPos(x, y, i);

		if(directions[x][y][i]){
			continue;
		}

		if(field[pos[0]] == undefined){
			directions[x][y][i] = true;
			continue;
		}


		let value = field[pos[0]][pos[1]];

		if(value != undefined && field[x][y] + 1 >= value && !path.includes(JSON.stringify([pos[0], pos[1]]))){
			directions[pos[0]][pos[1]][(i + 2) % 4] = true;
			return pos;
		}
	}
	
	return -1;
}


let min = map.length * map[0].length;




function iterate(field, x, y, n) {
	//console.log(n, path);

	if(n >= min){
		//return;
	}

	path.push(JSON.stringify([x, y]));
	
	if(field[x][y] == 27){
		console.log(n, JSON.stringify(path));
		
		if(min > n){
			min = n;
		}

		path.pop();
		return;
	}

	let nextPos = getFirstValid(field, x, y);
	while(nextPos != -1){
		iterate(field, nextPos[0], nextPos[1], n+1);
		nextPos = getFirstValid(field, x, y);
	}

	directions[x][y] = [false, false, false, false];
	path.pop();

}


const zeroPos = getZeroPos(map);

iterate(map, zeroPos[0], zeroPos[1], 0);

console.log(min);



