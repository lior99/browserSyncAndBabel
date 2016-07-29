'use strict';

import getProduct from 'product';


class Logger{
	constructor(){

	}

	static log(stringToWrite = "misc string"){
		console.log(stringToWrite);
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

	Logger.log('from a static method....');	
	Logger.log('finished....');

})();


