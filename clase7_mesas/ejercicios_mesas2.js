const prompt = require("prompt-sync")({ sigint: true });
/*1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.*/
function numeroSiguientes(numero){
    for(let i=1;i<11;i++){
        numero+=1;
        console.log(numero);
    }
}
//numeroSiguientes(45)
/*2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/
function saltosNumeros(){
    for(let i=5;i<=20;i+=3){
        console.log(i);
    }
}
//saltosNumeros()
/*3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100 */
function sumatoria(){
    let suma=0;
    for(let numero=0;numero<=100;numero++){
        suma+=numero;
    }
    console.log(suma)
}
sumatoria()