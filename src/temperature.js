const readlineSync = require("readline-sync");

const temp = Number(readlineSync.question("\nEnter a temperature: "));
const scale = readlineSync.question("\nEnter a scale: ").toLowerCase();


if (Number.isNaN(temp)) {
  console.log("\nInvalid.")
}

else if (temp > Number.MAX_SAFE_INTEGER || temp < Number.MIN_SAFE_INTEGER) {
  console.log("\nInvalid.")
}

else if (scale !== "f" && scale !== "c" && scale !== "k") {
  console.log("\nInvalid.")
}

else {

  if (scale == "f") {

    if (temp >= 212) {
      console.log("\nGas.")
    }

    else if (temp > 32 && temp < 212) {
      console.log("\nLiquid.")
    }

    else if ( temp <= 32) {
      console.log("\nSolid.")
    }
  }

  if (scale == "c") {

    if (temp > 100) {
    console.log("\nGas.")
    }

  else if (temp > 0 && temp <= 100) {
    console.log("\nLiquid.")
    }

  else if ( temp <= 0) {
    console.log("\nSolid.")
    }
  }

  if (scale === "k") {

    if (temp >= 373.15) {
    console.log("\nGas.")
    }

  else if (temp > 273.15 && temp < 373.15) {
    console.log("\nLiquid.")
    }

  else if ( temp <= 273.15) {
    console.log("\nSolid.")
    }
  }

}
