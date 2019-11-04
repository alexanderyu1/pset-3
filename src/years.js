const readlineSync = require("readline-sync");

const year = Number(readlineSync.question("\nEnter a year: "));

let yearByFour = year / 4

let yearByOnehundred = year / 100

let yearByFourhundred = year / 400

if (Number.isInteger(yearByFourhundred)) {
  console.log("\n" + year + " is a leap year.")
}

else if (year < 0) {
  console.log("\nInvalid.")
}

else if (year > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.")
}

else if (Number.isInteger(year) == false) {
  console.log("\nInvalid.")
}

else {

  if (Number.isInteger(yearByOnehundred)) {
    console.log("\n" + year + " is not a leap year.")
  }

  else {

      if (Number.isInteger(yearByFour)) {
        console.log("\n" + year + " is a leap year.")
      }

      else {

        console.log("\n" + year + " is not a leap year.")

      }

  }

}
