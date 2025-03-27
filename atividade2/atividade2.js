var maior = 0;
var menor = 0;
var contadorf = 0;
var contadorm = 0;
var soma = 0;
var media = 0;

for (let i = 0; i < 15; i++) {

    var altura = parseFloat(prompt("Digite sua altura em centímetros: "));
    var sexo = parseInt(prompt("Digite seu genêro. M = [0] F = [1]: "));
    if (sexo == 1) {
        contadorf += 1;
    } else if (sexo == 0) {
        soma = soma + altura;
        contadorm += 1;
    }
    if (i == 0) {
        maior = altura;
        menor = altura;
    } else {
        if (altura > maior){
            maior = altura;
        }
        if (altura < menor) {
            menor = altura;
        }
    }
}
media = soma/contadorm;
console.log("A maior altura é de: "+maior+"cm\nA menor altura é de: "+menor+"cm");
console.log("A média de altura de pessoas do gênero masculino é de: "+media+"cm");
console.log("O número de pessoas do gênero feminino é de: "+contadorf);



