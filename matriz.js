const read = require('readline-sync');
//Declaração de matriz
let names = [[]];

//primeiro, acessa as linhas
for (let i = 0; i < 3; i++){
    //depois acessa as colunas
    for (let j = 0; i < 2; j++){
        nomes = read.question("Linha " + i + "Coluna " + j + ": ");
    }
}