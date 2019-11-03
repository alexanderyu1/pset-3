const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isInteger(integer) == false) {
  console.log("\nInvalid.")
}

let number = Number(integer / 2);
