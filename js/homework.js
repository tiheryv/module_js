// 1:
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes y su nombre
// p.ej.
// --> El mes 5 (Mayo) tiene 31 días
/* 
const MONTH = parseInt( prompt ('Digita un numero entre 1 y 12'))
let month_name

    MONTH == 1 ? month_name = "Enero":
    MONTH == 2 ? month_name = "Febrero":
    MONTH == 3 ? month_name = "Marzo":
    MONTH == 4 ? month_name = "Abril":
    MONTH == 5 ? month_name = "Mayo":
    MONTH == 6 ? month_name = "Junio":
    MONTH == 7 ? month_name = "Julio":
    MONTH == 8 ? month_name = "Agosto":
    MONTH == 9 ? month_name = "Septiembre":
    MONTH == 10 ? month_name = "Octubre":
    MONTH == 11 ? month_name = "Noviembre":
    MONTH == 12 ? month_name = "Diciembre": ''
    
switch (MONTH){


    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`El mes ${MONTH} (${month_name}) tiene 31 días.`)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`El mes ${MONTH} (${month_name}) tiene 30 días.`)
        break
    case 2:
        console.log(`El mes ${MONTH} (${month_name}) tiene 28 o 29 días.`)
        break

    default:
        console.log('Numero inválido, intente nuevamente.')
} */

/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */
/* 
 const CLIMA = prompt('¿Como esta el clima?')

 switch (CLIMA) {
    case 'lluvioso':
        console.log(`¿Ya descolgaste la ropa?. Está ${CLIMA}.`)
    break
    case 'soleado':
        console.log(`¡Tómate una cerveza!. Está ${CLIMA}.`)
    break
    case 'nevando':
        console.log(`Mejor no salgas sin suéter. Está ${CLIMA}.`)
    break
    case 'nublado':
        console.log(`Que buen dia para 'chillear'. Está ${CLIMA}.`)
    break

    default:
        const NUEVO_CLIMA = prompt("No tengo registrado ese clima ¿cómo lo llamas?")
        const DESCRIPCION = prompt(`¿Qué tal está el clima '${NUEVO_CLIMA}' ?, ¿qué le gustaria hacer?`)

        console.log(`El clima '${NUEVO_CLIMA}' está para ${DESCRIPCION}`)
 
}*/

/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */
/* 
const NAME = prompt ('¿Cuál es tu nombre?')
let final_char = NAME.charAt(NAME.length -1)
console.log(final_char)

switch (final_char){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log (`Tu nombre termina con ${final_char}. Tiene una vocal.`)
        break
    default:
        console.log (`Tu nombre termina con ${final_char}. No tiene una vocal.`)
        break
}
 */
/**
 * 4:
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */

const NAME_ = prompt ('¿Cómo te llamas?')
let nameReversed = NAME_.split('').reverse().join('')
console.log(nameReversed.toUpperCase())


/**
 * 5:
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */


 const WORD = prompt ('Escribe una palabra: ')
 const NUM = parseInt(prompt ('Digita un numero entre el 1 y el 10: ')) 

 const WORD_REPEATED = WORD.repeat(NUM)
 console.log(WORD_REPEATED)