const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a grade: ")





if (grade == "A+") {
  var gpa = "4.00"
}

else if (grade == "A") {
  var gpa = "4.00"
}

else if (grade == "A-") {
  var gpa = "3.67"
}

else if (grade == "B+") {
  var gpa = "3.33"
}

else if (grade == "B") {
  var gpa = "3.00"
}

else if (grade == "B-") {
  var gpa = "2.67"
}

else if (grade == "C+") {
  var gpa = "2.33"
}

else if (grade == "C") {
  var gpa = "2.00"
}

else if (grade == "C-") {
  var gpa = "1.67"
}

else if (grade == "D+") {
  var gpa = "1.33"
}

else if (grade == "D") {
  var gpa = "1.00"
}

else if (grade == "D-") {
  var gpa = "0.67"
}

else if (grade == "F") {
  var gpa = "0.00"
}

else {
  var gpa = "invalid"
  console.log("\nInvalid.")
}

if (gpa != "invalid") {
  console.log("\nYour GPA is " + gpa + ".")
}
