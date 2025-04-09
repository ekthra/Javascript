var paisA = 80000;
var taxaA = 0.03;
var paisB = 200000;
var taxaB = 0.015;
var contador = 0;

while (paisB > paisA){
    contador += 1;
    paisA += paisA*taxaA;
    paisB += paisB*taxaB;
}

console.log('Número de anos até o pais A atingir ou ultrapassar o país B em habitantes: '+ contador);