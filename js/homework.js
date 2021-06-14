/* Imprimir la tabla del 8 en reversa */
console.log('Tabla del 8 en reversa')
for(let i = 10; i > 0; i--){
    console.log(`8 x ${i} = ${i*8}`)
}

/* Imprimir los numeros pares entre 1 y 100 */
console.log('Numeros pares entre 1 y 100')
for(let i = 1; i <= 100; i++){
    if (i %2 == 0) {
        console.log(i)
    }
}
/* Dado un String, invertir el orden e imprimir en consola */
const STRING = 'reverse'
console.log('Invertir "reverse"')
let reversed = ''

for (i = STRING.length - 1; i >=0; i--){
  /*   console.log(`${STRING[i]}`) */
    reversed +=STRING[i];
}
console.log(reversed)

/* Imprimir en consola el siguiente patron 
    El acuario tiene 9 peces 
    El acuario tiene 8 peces
    El acuario tiene 7 peces
    . . . */
for(i = 9; i>=0; i--){
    console.log(`El acuario tiene ${i} peces`)
}
/* For inner for
imprimir las tablas de 1 al 10 */

console.log('Tablas de mult 1 al 10')
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

/* Imprimir la tabla del 7 */
console.log('Tabla de 7')
for(let i=1; i<=10; i++){
    console.log (`7 x ${i} = ${i*7}`)
}


/* Imprimir los multiplos de 3 o 7*/
console.log('Multiplos de 3 y/o 7')
for(let i=1; i<=100; i++){
    if (i %3 === 0 || i %7 === 0){
        console.log (i)
    }
}

/* Imprimir la cantidad de espacios que se encuentran en un string*/

const STRING_2 = 'Cuantos espacios hay aqui?'
let espacios = 0;

for(i =0; i<= STRING_2.length; i++){
    if (STRING_2.charAt(i) === ' ') {
        espacios++;
    }
} console.log(espacios)
