function startGame() {
	document.turn = 'X';

	setMessage(document.turn + "gets to start.");
}

function setMessage(msg) {
	document.getElementById("message").innertext = msg;

}

function nextMove(box) {
	if (box.textContent == '') {
		box.textContent = display;
		switchTurn();
}	else {
	alert("Oops! Pick another square.");
}
}

function switchTurn(){
	if (display == 'X') {
		display = 'O';

	} else {
		display = 'X';
		changeColor();
	}

}

function checkRow (a,b,c,move) {
	var result = false;

}

function getBox (number) {
	return document.getElementById("s" + number).innertext;

}


function changeColor () {
	document.getElementByClassName('box').style.color = 'blue';
}



