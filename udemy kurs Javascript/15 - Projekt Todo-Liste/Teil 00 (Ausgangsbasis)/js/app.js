'use strict';

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
    const newTodoElement = document.querySelector(".new-todo")
    const todoListElement = document.querySelector(".todo-list")


    newTodoElement.addEventListener("keypress", (event) => {
        if (event.witch === KEY_ENTER && newTodoElement.value !== "") {
            const newButtonElement = document.createElement("button")
            newButtonElement.classList.add("destroy")

            const newLabelElement = document.createElement("label")
            newLabelElement.appendChild(
                document.createTextNode(newTodoElement.value)
            )
            const newInputCheckbox = document.createElement("input")
            newInputCheckbox.type = "checkbox"
            newInputCheckbox.classList.add("toggle")

            const newDivElement = document.createElement("div")
            newDivElement.classList.add("view")
            newDivElement.appendChild(newInputCheckbox)
            newDivElement.appendChild(newLabelElement)
            newDivElement.appendChild(newButtonElement)

            const newLiElement = document.createElement("li")
            newLiElement.appendChild(newDivElement)

            todoListElement.prepend(newLiElement)

            newTodoElement.value = ""

        }
    })
});
