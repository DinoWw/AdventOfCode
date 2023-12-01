class Monkey{
	constructor(operation, div, throwTo, ...startingItems){
		this.operation = "item".concat(operation.slice(3));
		this.div = div;
		this.throwTo = throwTo;
		this.items = startingItems;
		this.inspectedN = 0;
	}


	addItems(...items){
		this.items = this.items.concat(items);
	}


	processItems(monkeyList, reduceWorry){
		
		for(let i = this.items.length-1; i >= 0; i --){
			let item = this.items[i];
			
			// Inspect the item and increment inspectedN
			this.inspectedN ++;
			let old = item;

			eval(this.operation);

			item = reduceWorry ? Math.floor(item / 3) : item;

			// Throw 
			monkeyList[this.throwTo[+(item % this.div != 0)]].addItems(item);
			this.items.pop();

		}
	}


}