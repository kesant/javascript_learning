const prompt = require("prompt-sync")({ sigint: true });


let inches =parseInt(prompt("ingresa el valor en pulgadas"));

let conversion=function(pulgadas){
    return pulgadas*2.54
};
console.log(`${inches} convertido en centimetros : ${conversion(inches)}`)



