
function registerKoders(){
    
    let numberOfKoders = prompt("¿Cuantos Koders quieres registar?")

    for( let i = 0; i<numberOfKoders; i++){
        let userName = prompt(`${i+1}.Escribe el nombre del Koder:`)
        let userLastName = prompt(`${i+1}.Escribe el apellido del Koder:`)
        console.log(`${userName} ${userLastName}`)
    } 
}