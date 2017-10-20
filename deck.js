var Card = require("./card.js");

var Deck = function(deckName) {
  this.cards = [];
  this.deckName = deckName;

  this.addCard = function(x, y) {
    this.cards.push(new Card(x, y));
  };
  this.cardCount = function() {
    return this.cards.length;
  };
};

module.exports = Deck;