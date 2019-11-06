const readlineSync = require("readline-sync");

const number1 = readlineSync.question("\nEnter three numbers.\n\n");
const number2 = readlineSync.question("");
const number3 = readlineSync.question("");

//find if it is a number
if (isNaN(number1)) {
  console.log("\nInvalid.")
}

else if (isNaN(number2)) {
  console.log("\nInvalid.")
}

else if (isNaN(number3)) {
  console.log("\nInvalid.")
}

//find if inside safe integer range
else if (number1 < (Number.MIN_SAFE_INTEGER)) {
  console.log("\nInvaild.")
}

else if (number1 > (Number.MAX_SAFE_INTEGER)) {
  console.log("\nInvaild.")
}

else if (number2 < (Number.MIN_SAFE_INTEGER)) {
  console.log("\nInvaild.")
}

else if (number2 > (Number.MAX_SAFE_INTEGER)) {
  console.log("\nInvaild.")
}

else if (number3 < (Number.MIN_SAFE_INTEGER)) {
  console.log("\nInvaild.")
}

else if (number3 > (Number.MAX_SAFE_INTEGER)) {
  console.log("\nInvaild.")
}

// find if equal
else if (number1 == number2 && number2 == number3) {
  console.log("\nEqual.")
}

//find if strictly increasing
else if (number2 > number1 && number3 > number2) {
  console.log("\nStrictly Increasing.")
}

//find if increasing
else if (number2 >= number1 && number3 >= number2) {
  console.log("\nIncreasing.")
}

//find if strictly nDecreasing
else if (number2 < number1 && number3 <number2) {
  console.log("\nStrictly Decreasing.")
}

//find if decreasing
else if (number2 <= number1 && number3 <= number2) {
  console.log("\nDecreasing.")
}

else {
  console.log("\nUnordered.")
}
