"use strict"

// Warum benötigen wir anomye Funktionen?
/*
const fs = require("fs")
fs.readdir(__dirname, (err, files) => {
  console.log(files)
})
*/

const sayHello = () => {
  console.log("sayHello")
}

// console.log("sayHello:", sayHello)

const a = sayHello

a()