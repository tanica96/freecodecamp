"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("spacex/launches.json", {encoding: "utf-8"})
)

console.log("Anzahl launches:", launches.length)

// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
//
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 

let counter2018 = 0
for (const launch of launches) {
  if (launch["launch_year"] === "2018") {
    counter2018++
  }
}
console.log("1) Startvorgänge im Jahr 2018:", counter2018)

let counter2018Success = 0
for (const launch of launches) {
  if (launch["launch_year"] === "2018" && launch["launch_success"] === true) {
    counter2018Success++
  }
}
console.log("1a) Erfolgreiche Startvorgänge im Jahr 2018:", counter2018Success)

let failed2018 = counter2018 - counter2018Success
console.log("1b) Nicht Erfolgreiche Startvorgänge im Jahr 2018:", failed2018)


// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

let sumKg = 0

for (const launch of launches) {
  if (launch["launch_year"] !== "2018" || launch["launch_success"] === false) {
    continue
  }

  const secondStage = launch["rocket"]["second_stage"]

  for (const payload of secondStage["payloads"]) {
    const kg = payload["payload_mass_kg"]
    sumKg+=kg
  }
  // console.log("secondStage:", secondStage)
}

console.log("Im Jahr 2018 wurden " + sumKg + "kg in den Weltraum befördert")
