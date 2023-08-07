//funcion expresada
let sumar=function(numeroA,numeroB){
    return numeroA+numeroB
}
console.log(sumar(5,6));
//funcion declarada
function restar(numeroC,numeroD){

    return numeroC-numeroD
}

console.log(restar(10,3))

//ejemplo de scope
let mensaje="hola";

function saludar(){
    return mensaje;
}
console.log(saludar())