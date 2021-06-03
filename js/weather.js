const CLIMA = prompt ('¿Como esta el clima?')

if (CLIMA === 'lluvioso'){
    console.log(`¿Ya descolgaste la ropa?. Está ${CLIMA}.`)
}
else if(CLIMA === 'soleado'){ 
    console.log(`¡Tómate una cerveza!. Está ${CLIMA}.`)
}else if(CLIMA === 'nevando'){ 
    console.log(`Mejor no salgas sin suéter. Está ${CLIMA}.`)
}else if(CLIMA === 'nublado'){ 
    console.log(`Que buen dia para 'chillear'. Está ${CLIMA}.`)
}else{
    const NUEVO_CLIMA = prompt("No tengo registrado ese clima ¿cómo lo llamas?")
    const DESCRIPCION = prompt(`¿Qué tal está el clima '${NUEVO_CLIMA}' ?`)

    console.log(`El clima '${NUEVO_CLIMA}' está ${DESCRIPCION}`)
}