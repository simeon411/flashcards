var Deck = require("./deck.js");
var inquirer = require("inquirer");

var sportsDeck = new Deck ("NBA Trivia Deck");
var capitalCityDeck = new Deck ("Captial Cities Deck");
var catalog = [];

sportsDeck.addCard("What is the name of the Boston basketball team?", "celtics");
sportsDeck.addCard("What is the name of the San Antonio basketball team?", "spurs");
sportsDeck.addCard("What is the name of the Miami basketball team?", "heat");


capitalCityDeck.addCard("What is the capital of MA?", "boston");
capitalCityDeck.addCard("What is the capital of Texas?", "austin");
capitalCityDeck.addCard("What is the capital of California?", "Sacramento");

catalog.push(sportsDeck, capitalCityDeck);





var openingQuestion = [
	{
	    type: 'list',
	    name: 'deckSelection',
	    message: 'Which deck do you want to play with?',
	    choices: function choices (){
	    	var choicesArray = [];
	    	for (var x = 0; x < catalog.length; x++){
	    		choicesArray.push(catalog[x].deckName);
	    	}
	    	return choicesArray;
		},
  	}
];

var actionQuestions = [
	{
	    type: 'list',
	    name: 'action',
	    message: 'Which action would you like to perform?',
	    choices: ['Answer', 'Flip', 'Next', 'Exit'],
  	}
];

var takeAnswer = [
	{
		type: 'input',
	    name: 'user_guess',
	    message: 'Provide an answer'
	},
]





inquirer.prompt(openingQuestion).then(function (answer) {
	console.log("You've selected: " +  answer.deckSelection)
	var selectedDeck;
	//Match user selection to a deck.
  	for (var x = 0; x < catalog.length; x++){
  		if (answer.deckSelection == catalog[x].deckName){
  			selectedDeck = catalog[x];
  		}
  	}
	console.log(selectedDeck.cards[0].statement);

	inquirer.prompt(actionQuestions).then(function (answer) {
		if (answer.action == "Answer"){
			inquirer.prompt(takeAnswer).then(function (answer) {
				console.log("cool");
				
			});
		}
	});

  	
});