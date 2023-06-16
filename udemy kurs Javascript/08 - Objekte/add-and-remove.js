"use strict"

const student = {
  name: "Max Mustermann",
  age: 21
}

student.subject = "Englisch"
student["interestedIn"] = "Bulgarian"

delete student.age
// delete student["age"]

console.log("student", student)