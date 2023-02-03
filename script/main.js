// select your elements first 

// this is a 1 to 1 connection to an element in the DOM
/* let navButton = document.querySelector("#buttonOne"); */


// this is a 1 to many connection to an elements in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll("#buttonHolder img"),
	theheadline = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board");


// functions go in middle 
function changeBGImage(){
	let newBGIPath = "images/backGround" + this.id + ".jpg";

	//object.property - "new value"
	/* theheadline.textContent = "Nice choice, Drag and Drop is fun!"; */
	/* theheadline.classList.add("orange-headLine") */

// change the background image in the drop zone
// the ${} is called JavaScript Template String - whatever is inside the curly braces is evaluated and interpolated (replaces the bracke notation)
puzzleBoard.style.backgroundImage =`url(images/backGround${this.id}.jpg)`;

}


// event handling at the bottom
// how is the user going to interact with the elements / controll procedure

// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener("click", changeBGImage));