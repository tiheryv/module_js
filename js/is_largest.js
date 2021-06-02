
const NUM_1 = prompt ("Digita un numero: ")
NUM_1 = parseInt(NUM_1)
const NUM_2 =  parseInt(prompt ("Digita otro numero: "))

if (NUM_1 > NUM_2){
    console.log(`El numero ${NUM_1} es mayor que ${NUM_2}`)
}else if(NUM_1 < NUM_2){
    console.log (`El numero ${NUM_2} es mayor que ${NUM_1}`)
}else{ 
    console.log(`Los numeros son iguales`)
}