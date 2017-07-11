
var ideaList = [
	'is 26 years old', 'is a taurus', 'enjoys coding', 'made this website', 'likes long walks on the beach', 'interns at ICF Olson', 'can\'t teach you how to duggie', 'eats at Chipotle', 'finds new craft breweries', 'supports local', 'speaks french'
];
var output = [0, 0];
var isLeftLocked = document.getElementById("isLeftLocked");
var isRightLocked = document.getElementById("isRightLocked");
//var leftSelect = document.getElementById("leftSelect");
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
		//for wiki page
		// document.getElementById("leftOutput").href = "https://www.wikipedia.org/wiki/"+leftDisplay;
		// document.getElementById("rightOutput").href = "https://www.wikipedia.org/wiki/"+rightDisplay;
		//for google image page
		//document.getElementById("leftOutput").href = "http://images.google.com/search?tbm=isch&q="+textEdit(leftDisplay);
		//document.getElementById("rightOutput").href = "http://images.google.com/search?tbm=isch&q="+textEdit(rightDisplay);

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
	//var x = Math.floor(Math.random() * ideaList.length);
	//x = Math.floor(Math.random() * ideaList.length);
	// alert("success");
	return Math.floor(Math.random() * ideaList.length);
}
function sendGoogle(idea){

}
function textEdit(stuff){
	//http://images.google.com/search?tbm=isch&q=
	return stuff.replace(/ /g, "_");
}

function searchLeftBy() {

}
