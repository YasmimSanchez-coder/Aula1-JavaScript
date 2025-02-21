//Equivalente do REPITA em JavaScript
//while equivalente, neste caso, ou ATÉ
const read = require('readline-sync');
let parar = "n";
do{
     console.log("Repetiu");
     parar = read.question("Parar de repetir S/N");
     console.log(parar);
} while (parar !== "S" && parar !== "S");
//Note a diferença do operado, agora com AND (&&)