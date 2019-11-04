const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));



if (90 <= grade && grade <= 100) {
  console.log("\nYou received an A.")
}

else if (80 <= grade && grade < 90) {
  console.log("\nYou received a B.")
}

else if (70 <= grade && grade < 80) {
  console.log("\nYou received a c.")
}

else if (60 <= grade && grade < 70) {
  console.log("\nYou received a D.")
}

else if (0 <= grade && grade < 60) {
  console.log("\nYou received an F.")
}

else {
  console.log("\nInvalid.")
}
