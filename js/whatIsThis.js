let firstSide = prompt("Escribe el primer lado del cuadrilatero")
let secondSide = prompt("Escribe el segundo lado del cuadrilatero")

if (firstSide != secondSide) {
    alert("Es un rectangulo")
}else{
    alert("Es un cuadrado")
}

let area = firstSide * secondSide
alert(`El cruadrilatero tiene ${area} de area`)