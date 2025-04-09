var capital = parseFloat(prompt('Digite o capital inicial: '));
var tempo = parseInt(prompt('Digite o tempo em meses: '));
var taxa = parseFloat(prompt('Digite a taxa em porcentagem: '));

function calcularMontante(capital_inicial, tempo, taxa) {
    var montante = capital_inicial * (1 + (taxa / 100)) ** tempo;
    return montante;
}

var resultado = calcularMontante(capital, tempo, taxa);

console.log('Montante final: R$ ' + resultado.toFixed(2));
