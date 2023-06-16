"use strict"

const student = {
  name: "Max Mustermann",
  age: 21
}

for (const key in student) {
  const value = student[key]
  console.log("key:", key)
  console.log("value:", value)
}

// Object.keys()
console.log("Object.keys:", Object.keys(student))

// Object.values()
console.log("Object.values:", Object.values(student))

// Object.entries()
console.log("Object.entries:", Object.entries(student))
for (const entry of Object.entries(student)) {
  console.log(entry[0] + ": " + entry[1])
}
