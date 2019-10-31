const readlineSync = require("readline-sync");

const number = readlineSync.question("\nEnter a number: ")

let sign = (Math.sign(number));

if (sign = 0) {
  console.log("\nZero.");
}
