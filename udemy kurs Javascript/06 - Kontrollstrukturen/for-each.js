"use strict"

const students = ["Max", "Erika", "Monika"]

/*
for (let i = 0; i < students.length; i++) {
  console.log("i:", i)
  console.log(students[i])
}
*/

/*
for (const i in students) {
  console.log("i:", i)
  console.log(students[i])
}
*/

for (const student of students) {
  console.log(student)
}