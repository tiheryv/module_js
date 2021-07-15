var kodersList = [

    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]

/**
 * Crear Un nuevo array que contenga los nombres
 * completos de todos los koders del koderList
 * 
 * newArray = [
 *      "Fernanda Palacios Vera",
 *      "Naomi Puertos"
 * ]
 */




const createNewArray = () => {
    var newArray = []
    for (let i = 0; i < kodersList.length; i++) {
        /* console.log(kodersList[i])
        console.log(kodersList[i].join(' ')) */
        newArray.push(kodersList[i].join(' '))        
    }
    return newArray
}

var joinedNames = createNewArray();
console.log (joinedNames)


/**
 * 1. Ingresar un nombre
 * 2. Validar si existe algun koder cuyo primer nombre coincida
 * con el nombre escrito
 */

const validateName = (nameSearched) => {
    console.log(joinedNames)
    for (let i = 0; i < joinedNames.length; i++) {
        let firstName = joinedNames[i].split(' ')[0]
        console.log(firstName)

        firstName === nameSearched && console.log('El nombre existe')
        
    }
    
}
validateName('Fernanda')
