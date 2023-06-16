"use strict"

const data = [
  {firstname: "Max", age: 21, enrolled: true},
  {firstname: "Laura", age: 35, enrolled: false}
]

const dataAsJson = JSON.stringify(data)

console.log("dataAsJson:", dataAsJson)
console.log("typeof dataAsJson:", typeof dataAsJson)

// Antipattern! fs.writeFileSync() ist langsam!
const fs = require("fs")
fs.writeFileSync("ausgeben.json", dataAsJson)