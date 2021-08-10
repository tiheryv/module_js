
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



var productsList = [{
    name: 'producto 1',
    price: 12.45,
    category: 'Miscellaneous'
},
{
    name: 'producto 2',
    price: 23.13,
    category: 'Vegetables'
},
{
    name: 'producto 3',
    price: 45.00,
    category: 'Clothes'
},
{
    name: 'producto 4',
    price: 12500.00,
    category: 'Computers'
},
{
    name: 'producto 5',
    price: 15500.00,
    category: 'Computers'
},
{
    name: 'producto 6',
    price: 8729.00,
    category: 'Computers'
},
{
    name: 'producto 7',
    price: 150.00,
    category: 'Clothes'
},
{
    name: 'producto 8',
    price: 100.00,
    category: 'Miscellaneous'
},
{
    name: 'producto 9',
    price: 50.00,
    category: 'Vegetables'
},
{
    name: 'producto 10',
    price: 200.00,
    category: 'Clothes'
},

]

const printNames = array => productsList.forEach(product => console.log (product.name))

printNames(productsList)


const createLabels = () => productsList.map( product => `El ${product.name} tiene un precio de ${product.price}`)
    
let list = createLabels()
console.log(list)


const filterByCategory = (array, selectedCategory) => array.filter( item => item.category === selectedCategory)

let computers = filterByCategory(productsList,'Computers')
console.log(computers)


const getProductsPrice = array => array.reduce((accum, current) => accum + current.price ,0)

let totalPrice = getProductsPrice(productsList)
console.log(totalPrice)




