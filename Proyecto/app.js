const prompt=require("prompt-sync")({sigint:true});
let name=prompt("Ingrese su nombre:");
console.log(name);
console.log(`hola ${name}`);