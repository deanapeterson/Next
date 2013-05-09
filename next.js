//Next
//By Dean Peterson
//provides convenient way to return an array of strings
//Allows for multiple instances

function Next(itemList, options) {
	"use strict";
	options = options || {};

	if( Object.prototype.toString.call( itemList ) !== '[object Array]' ) {
		throw new Error("An array is required.");
	}

	this.original = itemList;
	this.itemList = itemList.slice(0);
	this.len = this.itemList.length - 1;
	this.index = 0;
}

Next.prototype = {
	next: function(options) {
		"use strict";
		options = options || {};

		var item = this.itemList[this.index];

		//increment or reset index
		this.index = this.index >= this.len ? 0 : this.index + 1;

		return item;
	}
};

if(exports){
	exports.Next = Next;
}
