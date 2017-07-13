/*Side Project Generator - Nelson
 *developed by Alex Nelson
 *summer 2017
*/

var ideaList = [
	'is 26 years old', 'is a taurus', 'enjoys coding', 'made this website', 'likes long walks on the beach', 'interns at ICF Olson', 'can\'t teach you how to dougie', 'eats at Chipotle', 'finds new craft breweries', 'supports local', 'speaks french', 'is an Eagle Scout', 'dislikes use of the word hate', 'like Hawaiian pizza', 'rolls a mean burrito'
];
var output = [0, 0];
var isLeftLocked = document.getElementById("isLeftLocked");
var isRightLocked = document.getElementById("isRightLocked");
var alertCounter = 0;

function newOutput(){
	if(isLeftLocked.checked === true && isRightLocked.checked === true){
		alert("homie, you all locked out..");
		return null;
	}
	else if(isLeftLocked.checked === true || isRightLocked.checked === true){
		if(isLeftLocked.checked === true){
			output[1] = getRandom();
			while(output[1] === output[0]){
				output[1] = getRandom();
			}
		}
		if(isRightLocked.checked === true){
			output[0] = getRandom();
			while(output[1] === output[0]){
				output[0] = getRandom();
			}
		}
	}
	else{
		output[0] = getRandom();
		output[1] = getRandom();
		while(output[1] === output[0]){
			output[1] = getRandom();
		}
	}
}

function myFunction(){
		//alert("there are "+ideaList.length+" list items");
		newOutput();
		var leftDisplay = ideaList[output[0]];
		var rightDisplay = ideaList[output[1]];
		document.getElementById("leftOutput").innerHTML = leftDisplay;
		document.getElementById("rightOutput").innerHTML = rightDisplay;
		alertCounter = alertCounter + 1;
		/*
		if(alertCounter === 5){
			alert("you know those are links");
		}
		if(alertCounter === 8){
			alert("like you can click on those");
		}
		if(alertCounter === 12){
			alert("any good ideas yet?");
		}
		*/
}

function getRandom(){
	return Math.floor(Math.random() * ideaList.length);
}
