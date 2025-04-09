var numero = [];
var contadorp = 0;
var contadori = 0;

for (let i = 0; i<10; i++){
    numero[i] = prompt('Digite um número: ');
}

for (let i = 0; i<10; i++){
    if (numero[i] % 2 == 0){
        contadorp += 1;
    } else {
        contadori += 1;
    }
}

console.log('Quantidade de número pares: '+contadorp+'\nQuantidade de número impares: '+contadori);