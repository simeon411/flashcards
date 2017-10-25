var CliController = require("./CliController.js");
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

var controller = new CliController("controller", catalog);

controller.selectDeck().then(controller.assignDeck)
	.then(controller.actionQuestion);







