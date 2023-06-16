"use strict"

let s = "3.641"

// String in eine Ganzzahl umwandeln
console.log(parseInt(s, 10))

// String in eine Kommazahl umwandeln
console.log(parseFloat(s))

// Achtung beim Rechnen mit Kommazahlen!
let result = 50.35 % 6 - 2.35
console.log(result)

// Lösung: Kommazahlen vermeiden!
let result2 = 5035 % 600 - 235
console.log(result2)

// Zahl zu String
let n = 3.145
console.log("" + n)
// console.log(n.toExponential())
console.log(n.toFixed(2))
// console.log(n.toPrecision(2))