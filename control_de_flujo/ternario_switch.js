//if ternario
let fruta="manzana";
let resultado=fruta=="manzana" ? "que rica manzana ":"ufa queria manzana";
console.log(resultado)
//switch
let semaforo="verde"
switch(semaforo){

    case semaforo=="verde":
        console.log("adelante");
        break;
    case semaforo=="amarillo":
        console.log("disminuye la velocidad");
        break;
    case semaforo=="rojo":
        console.log("para");
        break;
    default:
        console.log("el semaforo esta en mantenimiento")


}