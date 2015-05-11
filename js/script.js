// todo:
// listen for keystrokes in all input fields
// if there have been no keystrokes for 5 seconds, pulse the input fields that haven't been filled out yet

var cards = [
	{
		name: "allen",
		link: "http://www.zazzle.co.uk/paul_allens_card-240869161152174909"
	},
	{
		name: "bateman",
		link: "bbb"
	},
	{
		name: "vanpatten",
		link: "ccc"
	},
	{
		name: "bryce",
		link: "ddd"
	}
]

var activeCard = 0
var activeCardZIndex = 4

$(document).ready(function() {
	// focus on active card's name field
	
	// register listeners
	$(document).ready(function() {
		$(".card").each(function(i, element){
			var rand = Math.floor(Math.random() * 7) - 3;
			$(element).css("-webkit-transform", "rotate(" + rand + "deg)")
		})
		$("#print").click(function() {
			window.print();
		})
		$("#cycle-icon-container").click(function() {
			cycle();
		})
	})
})

function cycle() {
	if(activeCard++ >= 3)
		activeCard = 0
	$("form#purchase").attr("action", cards[activeCard].link)
	var c = $("div#" + cards[activeCard].name)
	c.css("z-index", activeCardZIndex++)
}