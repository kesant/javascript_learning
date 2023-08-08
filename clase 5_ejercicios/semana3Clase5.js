"use strict";
const prompt = require("prompt-sync")({ sigint: true });
/*Funciones simples
En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores-
1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/
/*console.log("1. De in a cm:");
let inches = parseInt(prompt("Ingrese el valor en in:"));

let conversion = function (inches) {
  return inches * 2.54;
};

console.log(`${inches}cm equivale a ${conversion(inches)}in`);*/

/*

2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
*/
/*console.log("2. string a URL");

let nombre = prompt("ingrese el string a convertir:");

let url = function (nombre) {
  return `www.${nombre}.com`;
};

console.log(`la URL es: ${url(nombre)}`);
*/

/*
3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.

*/
/*console.log("3. devuelve string con signo de !");

let frase = prompt("ingrese la frase");

let admiracion = function (frase) {
  return `${frase}!!!😱😱😱`;
};

console.log(`${admiracion(frase)}`);*/

/*


4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos*/

/*console.log("4. Edad perruna");
let edadPerro = parseInt(prompt("Ingrese la edad del perrito"));

let edadHumana = function (edadPerro) {
  return edadPerro * 7;
};

console.log(
  `${edadPerro} años del perro equivale a ${edadHumana(edadPerro)} años humano`
);*/
/*
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas. */
/*console.log("5. Valor de la hora de trabajo");
let sueldoMensual = parseInt(prompt("Ingrese su sueldo mensual actual en $:"));

let valorHora = function (sueldoMensual) {
  return sueldoMensual / 40;
};

console.log(
  `tu sueldo de ${sueldoMensual}$ equivale a ${valorHora(
    sueldoMensual
  )}$ por hora`
);*/

/*

2

6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.*/

/*console.log("6. IMC:");
let miPeso = parseFloat(
  prompt("Ingrese su peso en kg(con decimales usando.):")
);
let miAltura = parseFloat(
  prompt("Ingrese su altura en m(con decimales usando .):")
);

let imc = function (miPeso, miAltura) {
  return miPeso / miAltura ** 2;
};

console.log(`su IMC es ${imc(miPeso, miAltura)}`);*/
/*
Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla
como función expresada y función flecha.*/
/*console.log("6. IMS en flecha:");
let miPeso = parseFloat(
  prompt("Ingrese su peso en kg(con decimales usando.):")
);
let miAltura = parseFloat(
  prompt("Ingrese su altura en m(con decimales usando .):")
);

let imc = (miPeso, miAltura) => miPeso / miAltura ** 2;
console.log(`su IMC es ${imc(miPeso, miAltura)}`);*/

/*

Si llegamos hasta este punto estamos más que satisfechos. Ahora te dejamos unos
ejercicios con una dificultad extra, tendrás que buscar algunos conceptos para poder
resolverlos. Es una práctica que los programadores realizamos todos los días. Como
siempre te decimos, una parte importante del aprendizaje en programación es
ignorar la complejidad, e ir estrictamente a lo que necesitamos. Sabemos que no es
una práctica fácil de realizar, pero con el tiempo va a ir haciéndose más sencilla y
divertida.
7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase()*/
/*
console.log("7. de lowerCase a upperCase:");
let lowerString = prompt("ingrese el str en minúscula:");

let toUpper = (lowerString) => lowerString.toUpperCase();

console.log(`${lowerString} en mayúsculas es ${toUpper(lowerString)}`);*/

/*
8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.*/

/*console.log("8. tye of variable:");
let theVariable1 = "holas";
let theVariable2 = 5;
let theVariable3 = true;

let determineTypeOf = (theVariable1, theVariable2, theVariable3) => {
  return console.log(
    `${theVariable1} es tipo ${typeof theVariable1}; ${theVariable2} es tipo ${typeof theVariable2} y; ${theVariable3} es tipo ${typeof theVariable3}`
  );
};

determineTypeOf(theVariable1, theVariable2, theVariable3);*/

/*
9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.*/

let radio = parseFloat(
  prompt("ingrese el radio de la circunferencia para det. el perímetro:")
);

let pertimetro = (radio) => 2 * Math.PI * radio;

console.log(`para un radio de ${radio} el perimetro es ${pertimetro(radio)}`);


