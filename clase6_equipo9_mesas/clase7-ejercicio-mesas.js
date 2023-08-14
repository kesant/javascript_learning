let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o
//crear otras para tener varias pruebas)
/*
if(edad < 18) {
console.log("No puede pasar al bar.")
} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
console.log("Puede pasar al bar y tomar alcohol.")
}*/
/*● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?".*/
if(edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else if (edad ===21){
    console.log("Felicidades por ser mayor de edad")
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
console.log("Puede pasar al bar y tomar alcohol.")
}
/*Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar. */
function totalAPagar(vehiculo,litrosConsumidos){
    let total_pagar;

    switch(vehiculo){
        case "coche":
            total_pagar=86*litrosConsumidos;
            break
        case "moto":
            total_pagar=70*litrosConsumidos;
            break
        case "autobús":
            total_pagar=55*litrosConsumidos;
            break
    }
    if (litrosConsumidos>0 && litrosConsumidos<=25){
        total_pagar=total_pagar+50;
    }else if(litrosConsumidos>25){
        total_pagar=total_pagar+25;
    }
    return total_pagar;
}
console.log(totalAPagar("moto",25))
/*Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente. */

function precioSandwich(sandwichBase,tipoPan,adicionalA,adicionalB,adicionalC,adicionalD,adicionalE,adicionalF){
    let precioFinal;
    let precioSandwichBase;
    let precionPan;
    let precioAdicional=0;
    switch(sandwichBase){
        case "pollo":
            precioSandwichBase=150;
            break
        case "carne":
            precioSandwichBase=200;
            break
        case "veggie":
            precioSandwichBase=100;
            break
    }
    switch(tipoPan){
        case "blanco":
            precionPan=50;
            break
        case "negro":
            precionPan=60;
            break
        case "s/gluten":
            precionPan=75;
            break
    }
    if (adicionalA) {
        precioAdicional=precioAdicional+20;
    }
    if (adicionalB) {
        precioAdicional=precioAdicional+15;
    }
    if (adicionalC) {
        precioAdicional=precioAdicional+10;
    }
    if (adicionalD) {
        precioAdicional=precioAdicional+15;
    }
    if (adicionalE) {
        precioAdicional=precioAdicional+5;
    }
    if (adicionalF) {
        precioAdicional=precioAdicional+5;
    }
    precioFinal=precioSandwichBase+precionPan+precioAdicional;
    return precioFinal;
}
precioSandwich("pollo","negro",true,false,true,false,true,true)
/*Si llegaste hasta acá, estás más que bien. ¡Felicitaciones!
Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te
proponemos este otro ejercicio. Tené en cuenta que a partir de acá los ejercicios
pueden escalar en dificultad. Como decimos siempre, paciencia, ignorá la complejidad
y tratá de resolverlo con las herramientas que tengas a tu disposición. También podés
buscar información extra en Google o documentaciones que conozcas. */

/*¿Cuál es el número secreto?
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto. */
const prompt = require("prompt-sync")({ sigint: true });
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function numeroSecreto(numeroUsuario){
    let numeroAleatorio=getRandomInt(11);
    if (numeroUsuario==numeroAleatorio){
        console.log("Felicidades ganaste")
    }else{
        console.log(`Casi lo logras  el numero secreto es ${numeroAleatorio} tu numero es ${numeroUsuario}, vuelve a intentarlo`)
    }
}
let usuario=parseInt(prompt("Ingrese un numero entre 1 al 10:"))
numeroSecreto(usuario)
