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

/**
 *      - Quiero conocer la cantidad de productos en el array
 *      - Quiero conocer el costo total de todos los productos del array
 *      - Quiero conocer la cantidad de productos de cada categoria
 *              (Miscellaneous, Vegetables, Clothes, Computers)
 *      - Quiero conocer el costo por categoria
 *      - Quiero un nuevo array para cada categoria
 *      - Quiero un nuevo array de strings que tenga lo siguiente
 * 
 *          [
 *              "El {productName} tiene un costo de {price}"
 *          ]
 */

/* const getTotalProducts = array => {
    quantity = 0
    for (let i = 0; i < array.length; i++) {
        const counter = array[i];
        quantity++
    }
    return quantity
} */


const getTotalProducts = array => console.log(array.length)

getTotalProducts(productsList)


const getTotalCost = array => {
    let totalCost = 0
    for (let i = 0; i < array.length; i++) {
        totalCost += array[i].price
    }
    return console.log(totalCost)
}

getTotalCost(productsList)

/* const getProductsByCategory = array => {

    let clothesCounter = 0
    let miscellaneousCounter = 0
    let computersCounter = 0
    let vegetablesCounter = 0

    for (let i = 0; i < array.length; i++) {
        const category = array[i].category;

        category === 'Clothes' ? clothesCounter++ :
            category === 'Miscellaneous' ? miscellaneousCounter++ :
            category === 'Computers' ? computersCounter++ : category === 'Vegetables' ? vegetablesCounter++ :
            console.log(`"${category}" categoria no encontrada`);

    }
    return console.log(`Productos por categoria\n\nClothes: ${clothesCounter}\nMiscellaneous: ${miscellaneousCounter}\nVegetables: ${vegetablesCounter}\nComputers: ${computersCounter}`)
} 

getProductsByCategory(productsList)
*/

const getProductsByCategory = (array, selectedCategory) => {

    let result = []
    for (let i = 0; i < array.length; i++) {
        array[i].category === selectedCategory && result.push(array[i]) 
    } return result
}

let clothesProducts = getProductsByCategory(productsList, "Clothes")
console.log(clothesProducts)
getTotalCost(clothesProducts)
/* 
const getTotalCostByCategory = array =>{

    let clothesCost = 0
    let miscellaneousCost = 0
    let computersCost= 0
    let vegetablesCost = 0

    for (let i = 0; i < array.length; i++) {
        const category = array[i].category;
        
        switch(category){
            case 'Clothes' :
                let clothesPrice = array[i].price;
                clothesCost += clothesPrice
                break;
            case 'Miscellaneous' :
                let miscellaneousPrice = array[i].price;
                miscellaneousCost += miscellaneousPrice
                break;
            case 'Computers' :
                let computersPrice = array[i].price;
                computersCost+= computersPrice
                break;
            case 'Vegetables' :
                let vegetablesPrice = array[i].price;
                vegetablesCost += vegetablesPrice
                break;
            default:
                console.log("Categoria no encontrada")
        }   
    }

    return console.log(`Costos por categoria\n\nClothes: ${clothesCost}\nMiscellaneous: ${miscellaneousCost}\nVegetables: ${vegetablesCost}\nComputers: ${computersCost}`)
}


getTotalCostByCategory(productsList) */


/* const categorySort = array => {
    let clothesArray = []
    let miscellaneousArray = []
    let computersArray= []
    let vegetablesArray = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i].category;
        
        switch(element){
            case 'Clothes' :
                clothesArray.push(array[i])
                break;
            case 'Miscellaneous' :
                miscellaneousArray.push(array[i])
                break;
            case 'Computers' :
                computersArray.push(array[i])
                break;
            case 'Vegetables' :
                vegetablesArray.push(array[i])
                break;
            default:
                console.log("Categoria no encontrada")
        }   
    }
    console.log(clothesArray, miscellaneousArray, computersArray, vegetablesArray)
}

categorySort(productsList)
 */
const getAllProductsCost = array => {

    let productsCost = []

    for (let i = 0; i < array.length; i++) {
        let productName = array[i].name;
        let price = array[i].price;
        productsCost.push(`El ${productName} tiene un costo de $${price}`)
    }
    return (console.log(productsCost))
}

getAllProductsCost(productsList)
getAllProductsCost(clothesProducts)