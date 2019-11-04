const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a grade: ")





if (grade == "A+" || grade == "a+") {
  var gpa = "4.00"
}

else if (grade == "A" || grade == "a") {
  var gpa = "4.00"
}

else if (grade == "A-" || grade == "a-") {
  var gpa = "3.67"
}

else if (grade == "B+" || grade == "b+") {
  var gpa = "3.33"
}

else if (grade == "B" || grade == "b") {
  var gpa = "3.00"
}

else if (grade == "B-" || grade == "b-") {
  var gpa = "2.67"
}

else if (grade == "C+" || grade == "c+") {
  var gpa = "2.33"
}

else if (grade == "C" || grade == "c") {
  var gpa = "2.00"
}

else if (grade == "C-" || grade == "c-") {
  var gpa = "1.67"
}

else if (grade == "D+" || grade == "d+") {
  var gpa = "1.33"
}

else if (grade == "D" || grade == "d") {
  var gpa = "1.00"
}

else if (grade == "D-" || grade == "d-") {
  var gpa = "0.67"
}

else if (grade == "F" || grade == "f") {
  var gpa = "0.00"
}

else {
  var gpa = "invalid"
  console.log("\nInvalid.")
}

if (gpa != "invalid") {
  console.log("\nYour GPA is " + gpa + ".")
}
