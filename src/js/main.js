'use strict';

// class Product{
// 	constructor(){

// 	}
// }

class Logger{
	constructor(){

	}

	static writeToConsole(stringToWrite = "misc string"){
		console.log(stringToWrite);
	}
}

class Product {
	constructor(){
		console.log('constructor');
	}


}



(function(){
	let elm = document.getElementById("output");
	let vals = ['one', 'two', 'three', 'four', 'five', 'six','seven', 'eight'];

	let numbers = '';
	vals.forEach((item, index) => {

		numbers += `<div class="number">${index+1}.${item}</div>`;
	});

	elm.innerHTML = numbers;
})();


