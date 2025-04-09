var numero = [1,2,4,5,7,9,0,10];
maior = 0;
menor = 0;
for (let i = 0; i<numero.length; i++){
    if (i == 0){
        maior = numero[i];
        menor = numero[i];
    } else {
        if (numero[i] > maior){
            maior = numero[i];
        } 
        if (numero[i] < menor){
            menor = numero[i];
        }
    }
}

console.log('Maior número da lista: '+maior+'\nMenor número da lista: '+menor);