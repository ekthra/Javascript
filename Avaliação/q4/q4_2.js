var contratoAno = 1995;
var salario = parseFloat(prompt('Digite o salário: '))
var aumento = 0.0015;

while (contratoAno < 2025) { 
    if (contratoAno < 1997) {
        salario = salario + (salario * aumento);
    } else {
        aumento = aumento * 2;
        salario = salario + (salario * aumento);
    }
    contratoAno += 1;
}

console.log('Salário atual: R$ ' + salario);