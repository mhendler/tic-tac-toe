function startGame() {
	
	document.turn = 'X';
	setMessage(document.turn + " gets to start.");
	
}

function setMessage(msg) {
	document.getElementById("message").innerText = msg;

}

function nextMove(box) {
	if (box.textContent == '') {
		box.textContent = document.turn;
		switchTurn();
}	else {
	alert("Oops! Pick another square.");
}
}

function switchTurn(){
	if (document.turn == 'X') {
		document.turn = 'O';

	} else {
		document.turn = 'X';
		
	}

	setMessage("Now it's " + document.turn + "'s turn!");
}

function restartGame() {
	location.reload();
}

function changeColor() {
	if (document.turn == 'X') {
	
	}

}


// function checkRow (a,b,c,move) {
// 	var result = false;

// }

// function getBox (number) {
// 	return document.getElementById("s" + number).innertext;

// }


// function changeColor () {
// 	document.getElementByClassName('box').style.color = 'blue';
// }



