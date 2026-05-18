//Evaluación de notas

let nota = 85; 

console.log("Valor de la nota evaluada: " + nota);

if (nota > 0) {

    if (nota >= 90) {
        console.log("El estudiante aprueba con: Excelente");
    } 
    else if (nota >= 75 && nota <= 89) {
        console.log("El estudiante aprueba con: Bien");
    } 
    else if (nota >= 60 && nota <= 74) {
        console.log("El estudiante aprueba con: Suficiente");
    } 
    else {
        console.log("El estudiante no aprueba");
    }
} 
else if (nota === 0) {
    console.log("El estudiante no aprueba (Nota: 0)");
} 
else {
    console.log("Nota no válida");
}

// Evaluación de edad

//if
let edad = 27
if (edad >= 18) {
    console.log("Eres mayor de edad");
}else{
}

//if else
    let temperatura = 23
if (temperatura > 25) {
    console.log("Hace calor");
} else {
    console.log("Hace frio");
}