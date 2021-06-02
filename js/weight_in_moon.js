//Weight in moon

//Creamos la variable y guardamos el peso de la persona
let pesoKg = prompt ('¿Cuánto pesas? (Kg)')

//Declaramos las constantes
const CONSTANTE_GRAVITACIONAL = 9.81
const CONSTANTE_LUNAR = 1.622

//Sustituimos en la formula
let pesoLunar = ((parseInt(pesoKg) / CONSTANTE_GRAVITACIONAL) * CONSTANTE_LUNAR)

//Arrojamos el resultado con solo 2 decimales
alert('Tu peso en la Luna es: ' + pesoLunar.toFixed(2))