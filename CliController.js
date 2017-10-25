var Deck = require("./deck.js");
var inquirer = require("inquirer");

function CliController (name, catalog){
  this.decks = catalog;
  this.cliName = name;
  this.selection = "";
  this.selectedDeck;
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


  this.selectDeck = function(){
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
    return inquirer.prompt(openingQuestion);
  };

  this.actionQuestion = function(userDeck){
    inquirer.prompt(actionQuestions).then(function (answer) {
      if (answer.action == "Answer"){
        console.log(userDeck.cards[0].statement);
      }
    });
  }

  this.askQuestions = function(question){
    inquirer.prompt(actionQuestions).then(function (answer) {
      if (answer.action == "Answer"){
        console.log(userDeck.cards[0].statement);
      }
    });
  }


  this.deckCount = function() {
    return this.decks.length;
  };

  this.printDeck = function(deck){
    console.log(deck);
  }
  this.assignDeck = function(answer){
    this.selection = answer.deckSelection;
    console.log(this.selection);
    for (var x = 0; x < catalog.length; x++){
      if (answer.deckSelection == catalog[x].deckName){
        this.selectedDeck = catalog[x];
      }
    }
    return this.selectedDeck;
  };

}


module.exports = CliController;

