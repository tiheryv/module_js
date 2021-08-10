
/*
    Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. 
        Agregando además las siguientes funciones:

         - Obtener la edad a partir de la fecha de nacimiento
         - Obtener promedio de sus scores
         - Colección de Koder que pertenezcan a JavaScript 
         - Colección de Koder que pertenezcan a Python 
*/

const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]

function Koder(name, lastName, generation, birthDate, bootcamp, scores) {
    this.name = name;
    this.lastName = lastName
    this.generation = generation
    this.birthDate = birthDate
    this.bootcamp = bootcamp
    this.school = 'Kodemia'
    this.scores = scores
    this.greet = function() {
        console.log(`Hola Mi nombre es ${this.name} y soy de la generación ${this.generation}º de ${this.bootcamp}`)
    }

    this.getAge = function(){
        let today = new Date()
        let birthDate = new Date(this.birthDate)
        let age = today.getFullYear()- birthDate.getFullYear()

        return age
    }
    this.getAverage = function (){

        let total = this.scores.reduce( (accum, current) => {
    
            let scores = current.score
            return accum + scores
           
        }, 0)
        return (total / this.scores.length).toFixed(2)
    }
}


//Instanciar 

/* const kodersArrayForEach = []

kodersCollection.forEach (item => {
    let koder = new Koder (item.name, item.lastName, item.generation, item.birthDate, item.bootcamp, item.scores)
    kodersArrayForEach.push(koder)
}) 

console.log(kodersArrayForEach)*/

const kodersArray = kodersCollection.map(item => new Koder (item.name, item.lastName, item.generation, item.birthDate, item.bootcamp, item.scores))
console.log(kodersArray)

const getByBootcamp = selectedBootcamp => kodersArray.filter (koder => koder.bootcamp === selectedBootcamp)

let kodersPython = getByBootcamp('Python')
console.log(kodersPython)

let kodersJavaScript = getByBootcamp('JavaScript')
console.log(kodersJavaScript)

