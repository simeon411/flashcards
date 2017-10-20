var Deck = require("./deck.js");
var inquirer = require("inquirer");

function CliController (name, catalog){
  this.decks = catalog;
  this.cliName = name;
  this.selection = "";

  this.selectingDeck = function(selectDeck){

  }

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
    inquirer.prompt(openingQuestion).then(function (answer) {
      return answer.deckSelection;
    });
  };

  this.deckCount = function() {
    return this.decks.length;
  };

}


module.exports = CliController;

