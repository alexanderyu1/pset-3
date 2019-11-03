const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

let q = 0.25
let d = 0.10
let n = 0.05
let p = 0.01


if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
}
else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
}
else {
let quarters = Number(Math.floor(amount / q));
let dimes = Math.floor(Number((amount - (quarters*q)) / d));
let nickels = Math.floor(Number((amount - ((quarters*q) + (dimes*d))) / n));
let pennies = Math.floor(Number((amount - ((quarters*q) + (dimes*d) + (nickels*n))) / p));

console.log("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.");
}
