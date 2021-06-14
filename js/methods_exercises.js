/* ejercicio 1
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
 */

const STRING_1 = 'Enciclopedia'

console.log (STRING_1.length)
/* ejercicio 2
    Declarar 2 variables con strings y concatenarlos
 */

const STRING_2 = 'Hola'
const STRING_3 = 'Tihery'

let result_concat = STRING_2.concat(STRING_3)

console.log(result_concat)
/* 
ejercicio 3
    1. Declarar un string de al menos 10 caracteres 
    2. Imprimir en consola de 4 al 6 caracter
*/

const STRING_4 = 'Coca-Cola'

let result_slice = STRING_4.slice(4,6)

console.log(result_slice)

/* 
ejercicio 4
    1. Declarar un string de al menos dos palabras
    2. Imprimir en consola el string separado por guiones en cada palabra
 */

const STRING_5 = 'Me gustan'
let result_replace = STRING_5.replace(' ', '-')
console.log (result_replace)

/* 
ejercicio 5
    1. Declarar un string de al menos 2 palabras
    2. Imprimir en consola el string con cada una de las parabras capitalizadas

 */

const STRING_6 = 'hola koders'
let first_str6 = STRING_6.charAt(0).toUpperCase() + STRING_6.slice(1,5)
let second_str6 = STRING_6.charAt(5).toUpperCase() + STRING_6.slice(6)
console.log(first_str6.concat(second_str6))

/* 
ejercicio 6
    1. Declarar un string con un correo electronico
    2. Enmascarar con '*' el bloque del usuario

 */

const STRING_7 = 'tiheryvr@gmail.com'
let split_str7 = STRING_7.split('@')

let result_blur = ('*****@'.concat(split_str7[1]))

console.log(result_blur)


