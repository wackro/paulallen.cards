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

var details = {
    phone: "",
    company: "",
    companysub: "",
    name: "",
    role: "",
    address1: "",
    address2: ""
}

var activeCard = 0

// register listeners
$(document).ready(function() {
    setInputValuesAccordingToCookies()
    for(var i=1; i<cards.length; i++)
        $("#" + cards[i].id).hide()
	$("#print").click(function() {
		window.print()
	})
    $("#nav-back").click(function() {
		navigate("back")
	})
    $("#nav-forward").click(function() {
		navigate("forward")
	})
    $(".card input").change(function(event) {
        if(details[event.target.name] != undefined) {
            $(".card input[name=" + event.target.name + "]").val(event.target.value)
            document.cookie = event.target.name + "=" + event.target.value
            return
        }
    })
})

function setInputValuesAccordingToCookies() {
    $(".card input").each(function(index, element) {
        var cookie = getCookie(element.name)
        if(cookie != undefined)
            element.value = cookie
    })

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
}

function navigate(direction) {
    if(direction != "forward" && direction != "back")
        return
    $("#" + cards[activeCard].id).fadeOut()
    switch(direction) {
        case "forward":
            if(activeCard++ >= (cards.length -1))
		        activeCard = 0
            break
        case "back":
            if(activeCard-- <= 0)
		        activeCard = (cards.length -1)
            break
    }
    $("#" + cards[activeCard].id).fadeIn()
    updateFormUrl(cards[activeCard].link)
}

function updateFormUrl(url) {
    $("form#purchase").attr("action", cards[activeCard].link)
}
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
