/*
    pedir al usuario la catidad de koders a guardar
    pedir nombre y apellido de c/koder
    guardarlo en un array
    imprimir cada koder
*/

let numberOfKoders = prompt("¿Cuantos Koders quieres registar?")


    let usersArray = []

    for( let i = 0; i<numberOfKoders; i++){
        let userName = prompt(`${i+1}.Escribe el nombre del Koder:`)
        let userLastName = prompt(`${i+1}.Escribe el apellido del Koder:`)
        let user = userName +' '+userLastName 
        console.log(user)
        usersArray[i] = user
        
        
    } console.log(usersArray)

/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/

function newKoder() {

    let name = prompt('Escribe el nombre del Koder:')
    let lastName = prompt('Escribe el apellido del Koder:')

    let fullName = name + ' ' + lastName

    usersArray.push(fullName)

    return (usersArray)
}
console.log(usersArray)

function deleteKoder(){
    usersArray.pop()
    return (usersArray)
}
console.log(usersArray)