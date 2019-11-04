const readlineSync = require("readline-sync");

const card = String(readlineSync.question("\nEnter a playing card: "));

let suit = card.charAt(0);
let rank = card.charAt(1);


//ranks
if (rank == "2") {
  var rankPrint = "Two"
}

else if (rank == "3") {
  var rankPrint = "Three"
}

else if (rank == "4") {
  var rankPrint = "Four"
}

else if (rank == "5") {
  var rankPrint = "Five"
}

else if (rank == "6") {
  var rankPrint = "Six"
}

else if (rank == "7") {
  var rankPrint = "Seven"
}

else if (rank == "8") {
  var rankPrint = "Eight"
}

else if (rank == "9") {
  var rankPrint = "Nine"
}

else if (rank == "T" || rank == "t") {
  var rankPrint = "Ten"
}

else if (rank == "J" || rank == "j") {
  var rankPrint = "Jack"
}

else if (rank == "Q" || rank == "q") {
  var rankPrint = "Queen"
}

else if (rank == "K" || rank == "k") {
  var rankPrint = "King"
}

else if (rank == "A" || rank == "a") {
  var rankPrint = "Ace"
}


//suits
if (suit == "C" || suit == "c") {
  var suitPrint = "Clubs"
}

else if (suit == "D" || suit == "d") {
  var suitPrint = "Diamonds"
}

else if (suit == "H" || suit == "h") {
  var suitPrint = "Hearts"
}

else if (suit == "S" || suit == "s") {
  var suitPrint = "Spades"
}

console.log("\n" + rankPrint + " of " + suitPrint + ".");
