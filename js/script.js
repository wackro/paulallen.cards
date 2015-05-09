// todo:
// listen for keystrokes in all input fields
// if there have been no keystrokes for 5 seconds, pulse the input fields that haven't been filled out yet

var activeCard = 0;

var cards = [
	{
		name: "Paul ALLEN",
		role: "Vice President",
		phone: "212.555.6342",
		company: "PIERCE & PIERCE",
		companySub: "Mergers and Acquisitions",
		address1: "358 EXCHANGE PLACE NEW YORK, N.Y. 10 099",
		address2: "FAX 212 555 6390 TELEX 10 5434"
	},
	{
		name: "Patrick Bateman",
		role: "Vice President",
		phone: "212.555.6342",
		company: "Pierce & Pierce",
		companySub: "Mergers and Acquisitions",
		address1: "358 Exchange Place New York, N.Y. 10 099 Fax 212 555 6390 Telex 10 5434"
	},
	{
		name: "David VAN PATTEN",
		role: "Vice President",
		phone: "212.555.6342",
		company: "PIERCE & PIERCE",
		companySub: "Mergers and Acquisitions",
		address1: "358 EXCHANGE PLACE NEW YORK, N.Y. 10 099 FAX 212 555 6390 TELEX 10 5434",
	},
	{
		name: "Timothy BRYCE",
		role: "Vice President",
		phone: "212.555.6342",
		company: "PIERCE & PIERCE",
		companySub: "Mergers and Acquisitions",
		address1: "358 EXCHANGE PLACE NEW YORK, N.Y. 10 099 FAX 212 555 6390 TELEX 10 5434"
	}
]

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