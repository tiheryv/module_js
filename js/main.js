//Seleccionar elemnetos a través de tagname

let listItems = document.getElementsByTagName("li")
console.log(listItems)

// Selecionar elementos a través de su clase

let successItems = document.getElementsByClassName("bg-success")
console.log(successItems)

// Seleccionar elementos a través de su id

let kodersList = document.getElementById("koders-list")
console.log(kodersList)

//Selector de últiples elementos

document.querySelector()
document.querySelectorAll()

let notesArray = [
    {
        signature:"Español",
        note: 8
    },
    {
        signature:"Matemáticas",
        note: 9
    },
    {
        signature:"Inglés",
        note: 8
    },
    {
        signature:"Física",
        note: 10
    },

]