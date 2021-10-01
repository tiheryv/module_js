var heading = document.createElement("h1")
document.body.appendChild(heading)

console.log(heading)

var headingText = document.createTextNode("Hola Koders")
heading.appendChild(headingText)


var namesArray = [
    "Beto",
    "Gustavo",
    "Mariana"
]


var list = document.createElement("ul")
document.body.appendChild(list)

console.log(list)

namesArray.forEach( item => {

    var listElement = document.createElement("li")
    var itemText = document.createTextNode(item)
    
    listElement.appendChild(itemText)
    list.appendChild(listElement)

})

document.body.appendChild(list)