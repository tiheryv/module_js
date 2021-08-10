let aSide = prompt("Escribe el primer valor del triangulo")
let bSide = prompt("Escribe el segundo valor del triangulo")
let cSide = prompt("Escribe el tercer valor del triangulo")


if (aSide == bSide && bSide == cSide){
    alert("Es un triángulo equilatero")
}else if (aSide == bSide || bSide == cSide || cSide == aSide){
    alert("Es un triángulo isóceles")
}else /* (aSide != bSide && bSide!= cSide) */{
    alert("Es un triangulo escaleno")
}
