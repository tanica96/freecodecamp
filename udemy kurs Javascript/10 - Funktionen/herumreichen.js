"use strict"

const fs = require("fs")

/*
fs.readdir(__dirname, (err, files) => {
  console.log(files)
})
*/

fs.readFile("daten.txt", {encoding: "utf-8"}, (err, data) => {
  console.log(data)
})
