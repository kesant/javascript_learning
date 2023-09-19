/*EJERCICIO 1
*/ 
let valor1 = 3;
let valor2 = 11;
let valor3 = 13;

function ejercicio1(numero1, numero2, numero3) {
    let retorno = "";

    if (numero1 > numero2) {
        retorno += numero2 * numero3;
    }

    if (numero2 % 2 === 0) {
        retorno += " " + numero2 + " es par";
    }

    if ((numero1 + numero2 + numero3) % 3 === 0) {
        retorno += " " + "la suma de estos tres números es múltiplo de 3.";
    }

    return retorno;
}

let resultado = ejercicio1(valor1, valor2, valor3);
console.log(resultado);

/*EJERCICIO 2*/
let trabajador={
    nombre:"kevin",
    apellido:"santana",
    edad:15,
    estaEmpleado:false,

};
function verificarTrabajador(usuarioTrabajador){
    let resultado;
    if (usuarioTrabajador.edad>18 && usuarioTrabajador.estaEmpleado){
        resultado= usuarioTrabajador.nombre+" "+usuarioTrabajador.apellido+ " está empleado y es mayor de edad."
    }else if (usuarioTrabajador.edad>18 &&  (usuarioTrabajador.estaEmpleado)){
        resultado= usuarioTrabajador.nombre+" "+usuarioTrabajador.apellido+ " no está empleado y es mayor de edad."
    }else {
        resultado= usuarioTrabajador.nombre+" "+usuarioTrabajador.apellido+ " no está empleado y no es mayor de edad."
    };
    
    return resultado;

};
console.log(verificarTrabajador(trabajador))

/*EJERCICIO 3 */


let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    
    anio: 2019,
    color: 'negro'
}]

autos.pop()
let autosNuevos=[]
for (let indice=0;indice<autos.length;indice++){
    if (autos[indice].anio >2019){
        autosNuevos.push(autos[indice]);
    };
};
console.log(autosNuevos)