const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a grade: ")

let gpa = grade
let A = 4.00
let B = 3.00
let C = 2.00
let D = 1.00
let F = 0.00

if (A) {
  gpa + A
}
