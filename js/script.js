// todo:
// listen for keystrokes in all input fields
// if there have been no keystrokes for 5 seconds, pulse the input fields that haven't been filled out yet

var activeCard = 0;

$(document).ready(function() {
	// focus on active card's name field
	
	// register listeners
	$(document).ready(function() {
		$("#print").click(function() {
			window.print();
		})
		$("#cycle").click(function() {
			cycle();
		})
	})
})

function cycle() {
	if(activeCard++ > 3)
		activeCard = 0;
	populateFields(cards[activeCard])
}