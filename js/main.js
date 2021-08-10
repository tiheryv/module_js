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



