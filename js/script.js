// todo:
// listen for keystrokes in all input fields
// if there have been no keystrokes for 5 seconds, pulse the input fields that haven't been filled out yet

var cards = [
	{
		id: "allen",
        fullName : "Paul Allen's card",
		link: "http://www.zazzle.co.uk/paul_allens_card-240869161152174909"
	},
	{
		id: "bateman",
        fullName : "Patrick Bateman's card",
		link: "http://zazzle.com/patrick_batemans_card_xxxxxxxxxxx"
	},
	{
		id: "vanpatten",
        fullName : "David Van Patten's card",
		link: "http://zazzle.com/david_vanpattens_card_xxxxxxxxxxx"
	},
	{
		id: "bryce",
        fullName : "Timothy Bryce's card",
		link: "http://zazzle.com/timothy_bryces_card_xxxxxxxxxxx"
	}
]

var activeCard = 0

// register listeners
$(document).ready(function() {
    updateNav()
    for(var i=1; i<cards.length; i++)
        $("#" + cards[i].id).hide()
	$("#print").click(function() {
		window.print()
	})
	$("#cycle-icon-container").click(function() {
		cycle()
	})
})

function cycle() {
    $("#" + cards[activeCard].id).fadeOut()
	if(activeCard++ == (cards.length -1))
		activeCard = 0
    $("#" + cards[activeCard].id).fadeIn()
    updateNav()
    updateFormUrl()

    function updateFormUrl(url) {
        $("form#purchase").attr("action", cards[activeCard].link)
    }
}

function updateNav() {
    $("#nav-title").text(cards[activeCard].fullName)
}
