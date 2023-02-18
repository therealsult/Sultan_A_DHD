/* select your elements first */

	// this is a 1 to 1 connection to an element in the DOM
	/* let navButton = document.querySelector("#buttonOne"); */

	// this is a 1 to many connection to an elements in the DOM
	// the variable name is the "basket"

let navButtons = document.querySelectorAll("#buttonHolder img"),
	theheadline = document.querySelector("#headLine h1"),
	//collect ALL the draggable pieces in the drag zone
	puzzelPieces = document.querySelectorAll('.puzzle-pieces img'),
	// collect ALL of the drop zone elements
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector(".puzzle-board"),
	templink = document.querySelector('a'),
	//setup a global variable to store a reference to the dragged piece
	//I need to know this later when I drop it on a zone
	draggedPiece;






	
/* functions go in middle */

	//object.property - "new value"

	/* theheadline.textContent = "Nice choice, Drag and Drop is fun!"; */
	/* theheadline.classList.add("orange-headLine") */

	// change the background image in the drop zone
	// the ${} is called JavaScript Template String - whatever is inside the curly braces is evaluated and interpolated (replaces the bracke notation)

function changeBGImage(){
	let newBGIPath = "images/backGround" + this.id + ".jpg";
	puzzleBoard.style.backgroundImage =`url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() { 
	console.log('startd draggin a piece!', this);
	draggedPiece = this;}

function handleDragOver(e) { 
	e.preventDefault();
	console.log(' draggin over me!');}

function handleDrop(e) { 
	e.preventDefault();
	console.log('droppin on me!');
	e.target.appendChild(draggedPiece);}

function dragEnd(e) { 
	e.preventDefault();
	console.log('locked in');
	e.target.appendChild(draggedPiece);}




/* event handling at the bottom */

	// how is the user going to interact with the elements / controll procedure

	// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener("click", changeBGImage));

	//add the drag start handler to all of the pieces
puzzelPieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag))

	// add the dragover handeling to the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));


dropZones.forEach(zone => zone.addEventListener('lock', blockDefaultBehaviour));



navButtons.addEventListener('click', () => {
	puzzelPieces.forEach(puzzelPieces => input.value = '');
})
	



// temp handling
function blockDefaultBehaviour(e) {
	e.preventDefault();}

dropZones.forEach(zone => zone.addEventListener('click', blockDefaultBehaviour));