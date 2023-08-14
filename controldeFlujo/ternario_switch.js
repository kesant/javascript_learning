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
//ejercicio playgorund
function tengoClases(dia) {
	switch (dia) {
    	//Escribe tu código aquí
		case dia==="lunes":
            console.log('tenés clases');
			break;
		case dia=="miercoles":
            console.log('tenés clases');
			break;
		case dia=="viernes":
			console.log('tenés clases');
			break;
		default:
			console.log("no tenés clases");
	}
}
let dia="lunes"
tengoClases("lunes")
tengoClases("dia")
tengoClases("viernes")
tengoClases("dsad")