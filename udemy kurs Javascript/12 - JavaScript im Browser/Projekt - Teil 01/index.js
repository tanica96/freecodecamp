"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const buttonIncrement = document.getElementById("button-increment")
    const buttonReset = document.getElementById("button-reset")

    const counter = document.getElementById("counter")


    buttonIncrement.addEventListener("click", () => {

        const currentCounter = parseInt(counter.innerText.split(": ")[1], 10)

        counter.innerText = "Anzahl Klicks: " + (currentCounter + 1)
    })
})