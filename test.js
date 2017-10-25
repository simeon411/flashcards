  var prompt = require('prompt');
  var Deck = require("./deck.js");
  var inquirer = require("inquirer");
 
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['username', 'email'], function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });

function CliController (name, catalog){
  this.decks = catalog;
  this.cliName = name;
  this.selection = "";
  var selectedDeck;


}


module.exports = CliController;

