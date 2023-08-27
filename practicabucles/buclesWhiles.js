const prompt = require("prompt-sync")({ sigint: true });
/*
Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. 
Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.

Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:

5 * 1 = 5
5 * 2 = 10

5 * 3 = 15

...

hasta llegar a multiplicarlo por 10
*/

function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí 
    let tabla=1
    while(tabla<=10){
        console.log(numero + "*"+tabla+"="+tabla*numero);
        tabla++;
    };  
};
tablaDeMultiplicar(2)