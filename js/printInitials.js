let musicians = [
    "Richard Zven Kruspe",
    "Till Lindemann",
    "Enrique Bunbury",
    "Juan Valdivia"
]

let painters = [
    "Leonardo Da Vinci",
    "Claude Monet",
    "Vincent Van Gogh"
]

function getInitials(arrayName) {

    for(let i=0; i < arrayName.length; i++){
        let separetedNames = arrayName[i].split(' ')
        console.log(separetedNames)

        initials = ''
        for (let i = 0; i < separetedNames.length; i++) {
            const initial = separetedNames[i].charAt(0);
            initials += initial + ". " 
            
        }console.log(initials)

    }

    
}

getInitials(painters);
getInitials(musicians);