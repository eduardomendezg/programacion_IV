/*//Declaro una funcion
function sumar(num1, num2){
    total = num1 + num2;
    return
}

//console.log(sumar(20,2));
let restar = function(num1, num2){
    return num1-num2;
}
//console.log(restar(20,2));

//alert(message="hola mundo");
let multi = function(num1,num2){
    return num1*num2
}
console.log(multi(num2=10, num1=2));
//parametos => cuerpo de la funcion
//let div = (num1,num2)=> num1/num2;
//Operadores ternarios 
let div = (num1,num2)=> num2==0 ?"No se puede dividir entre cero": num1/num2 ;
let paridad = (num) => num%2==0 ? "Es par": "es impar";
console.log(div(20,0))
console.log(paridad(3))*/

//calculo de promedio 
let numMaterias = prompt("¿Cuántas asignaturas estas cursando?");
let notas = [];
let totalNotas = 0;

for (let i = 0; i < numMaterias; i++) {
    let nota = parseFloat(prompt(`Ingresa la nota de la asignatura ${i + 1}:`));
    notas.push(nota);
    totalNotas += nota;
}

let promedio = totalNotas / notas.length;
alert(`El promedio de tus notas es: ${promedio}`);
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*Crear un programa que almacene las tareas  pendientes en un arreglo.
 Luego, el programa debe permitir marcar una tarea como completada y eliminarla del arreglo. 
 Al final, muestra la lista de tareas pendientes. */
 let tareas = [];
 let cantidadT = prompt("¿Cuántas tareas tienes pendientes?");
 
 for (let i = 0; i < cantidadT; i++) {
     let tarea = prompt(`Ingresa la tarea ${i + 1}:`);
     tareas.push(tarea);
 }
 
 let tareaCompletada = prompt("¿Cuál tarea completaste?");
 
 let indice = tareas.indexOf(tareaCompletada);
 if (indice !== -1) {
     tareas.splice(indice, 1);
     alert(`¡Bien hecho! Tarea completada. Tus tareas pendientes ahora son: ${tareas}`);
 } else {
     alert("La tarea ingresada no está en la lista.");
 }
 

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*Conversion de temperatura de Celcius a Fahrenheit */
function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
let fahrenheit = convertirCelsiusAFahrenheit(celsius);
alert(`${celsius}°C es igual a ${fahrenheit}°F.`);
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*Desarrollar una función que  ayude a gestionar las fechas de entrega de tareas.
 La función debe recibir varias fechas y calcular el tiempo restante hasta la fecha de entrega de cada tarea. */
function calcularDiasRestantes(fechaEntrega) {
    let fechaActual = new Date();
    let fechaFinal = new Date(fechaEntrega);
    let diferencia = fechaFinal - fechaActual;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
}

let cantidadTareas = prompt("¿Cuántas tareas tienes con fecha de entrega?");
for (let i = 0; i < cantidadTareas; i++) {
    let fecha = prompt(`Ingresa la fecha de entrega de la tarea ${i + 1} (en formato YYYY-MM-DD):`);
    let diasRestantes = calcularDiasRestantes(fecha);
    alert(`Quedan ${diasRestantes} días para la entrega de la tarea ${i + 1}.`);
}
