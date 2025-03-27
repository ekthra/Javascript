function calcular_total(valor, quantidade) {
    valor_final = valor * quantidade;
    return valor_final
}

function aplicar_desconto(valor_final){
    if (valor_final > 100) {
        valor_final = valor_final - (valor_final * 0.10)
    }
    return valor_final
}

var valor = prompt('Digite o preço do produto: ');
var quantidade = prompt('Digite a quantiade de produtos: ');
preco = calcular_total(valor, quantidade);
preco_desconto = aplicar_desconto(preco);

console.log('O Preço total do produto é: '+preco+'R$\nO preço com desconto é: '+preco_desconto+'R$');

