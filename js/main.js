
//console.log("Up and running!");

/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var scor = 1;
var cardsInPlay=[];

var checkForMatch = function(){

	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
		document.getElementById('score').innerHTML = "Score: " + scor;
	}
	else{
		alert("Sorry, try again.");
		document.getElementById('score').innerHTML = "Score: " + scor;
	}

};

var flipCard = function(cardId){

var cardId=this.getAttribute('data_id');
this.setAttribute('src' , cards[cardId].cardImage);
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
console.log("User flipped" + " " +cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

};

var createBoard = function()
{
	for(var i=0; i< cards.length; i++){

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data_id' , i);
		cardElement.addEventListener('click' , flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();

var refresh = function(){

		window.location.reload();
};
var resetButton = document.getElementById('btn').addEventListener('click',refresh);
resetButton.onclick = reloadPage;