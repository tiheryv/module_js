let mentorsArray = [
{
    name: "Israel Salinas Martinez",
    scores : [
        {
            signature: "HTML",
            score: 10
        },
        {
            signature: "CSS",
            score: 10
        },
        {
            signature: "JS",
            score: 8
        },
        {
            signature: "ReactJS",
            score: 8
        },
    ]
},
{
    name: "David Cermeño Moranchel",
    scores : [
        {
            signature: "HTML",
            score: 8
        },
        {
            signature: "CSS",
            score: 7
        },
        {
            signature: "JS",
            score: 10
        },
        {
            signature: "ReactJS",
            score: 10
        },
    ]
},
{
    name: "Charles Silva",
    scores : [
        {
            signature: "HTML",
            score: 9
        },
        {
            signature: "CSS",
            score: 9
        },
        {
            signature: "JS",
            score: 10
        },
        {
            signature: "ReactJS",
            score: 9
        },
    ]
},
{
    name: "Michael Villalba Sotelo",
    scores : [
        {
            signature: "HTML",
            score: 8
        },
        {
            signature: "CSS",
            score: 10
        },
        {
            signature: "JS",
            score: 9
        },
        {
            signature: "ReactJS",
            score: 10
        },
    ]
}

]

/**
 * Usando mentorsArray, realizar lo siguiente:
 *      -Obtener el score promedio de cada materia (HTML, CSS, JS, ReactJS)
 *      -Obtener el promedio individual de cada mentor
 *      -Obtener un array de strings con la siguiente forma:
 *          "Mi nombre es {nombre} y mi promedio es de {promedio}"
 *      -Obtener la lista de mentores cuyo promedio sea mayor a 9.5
 */



/*Función para obtener el promedio de una materia específica ( materia )*/
const getAverage = (selectedSignature, array) => {

    let totalMateria = array.reduce( ( accum, current ) => {
        /*Extraemos de cada mentor el objeto cuya propiedad "signature" coincide con nuestro parámetro "materia"*/

        let puntuacionMateria = current.scores.find( score => score.signature === selectedSignature ).score/*Extraemos la propiedad score del objeto encontrado*/
        console.log(puntuacionMateria)
        return accum +  puntuacionMateria /*Acumulamos el valor de score*/
    },0)
    /*obtenemos el promedio*/

    console.log(totalMateria)
    let average = totalMateria / array.length
    /*devolvemos el promedio*/
    return average
}


let htmlAverage = getAverage( "HTML" , mentorsArray )
console.log( "htmlAverage: ", htmlAverage  )

let cssAverage = getAverage( "CSS" )
console.log( "cssAverage: ", cssAverage  )

let jsAverage = getAverage( "JS" )
console.log( "jsAverage: ", jsAverage  )

let reactAverage = getAverage( "ReactJS" )
console.log( "reactAverage: ", reactAverage  )

const getMentorAverage = (mentorName) => {
    let mentorScores = mentorsArray.find( mentor => mentor.name === mentorName).scores
    let mentorAverage = mentorScores.reduce( ( accum, current ) => {
        return accum + current.score
    },0 ) / mentorScores.length

    console.log( "mentorAverage: ", mentorAverage)

    return mentorAverage
}

getMentorAverage("Israel Salinas Martinez")
getMentorAverage("David Cermeño Moranchel")


const createLabelsArray = () => {
    let labelsArray = mentorsArray.map( mentor => {
        return `Hola, soy ${mentor.name} y mi promedio es de ${ getMentorAverage(mentor.name) }`
    })
    console.log( labelsArray )
}

createLabelsArray()

const getBestMentors = () => {
    let result = mentorsArray.filter( mentor =>
        getMentorAverage( mentor.name ) > 9
    )
    console.log( result )
}

getBestMentors() 


