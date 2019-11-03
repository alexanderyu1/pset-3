const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\nEnter an integer: "));


if (Number.isInteger(integer) == false) {
  console.log("\nInvalid.")
}

  else if (integer < (Number.MIN_SAFE_INTEGER)) {
    console.log("\nInvaild.")
  }

  else if (integer > (Number.MAX_SAFE_INTEGER)) {
    console.log("\nInvaild.")
  }

else {

  let number = Number(integer / 2);

  if (Number.isInteger(number) == true) {
    console.log("\nEven.")
  }

  else if (Number.isInteger(number) == false) {
    console.log("\nOdd.")
  }
}
