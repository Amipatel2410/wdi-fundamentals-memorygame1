
//console.log("Up and running!");

/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/

var cards = ["queen","queen","king","king"];
var cardsInPlay=[];

var checkForMatch = function(){

	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}

};

var flipCard = function(cardId){


console.log("User flipped" + " " +cards[cardId]);
cardsInPlay.push(cards[cardId]);
if(cardsInPlay.length === 2)
{
	/*if(cardsInPlay[0]===cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else{
		alert("Sorry! Try again!");
	}*/
	checkForMatch();
}

};
flipCard(0);
flipCard(2);

