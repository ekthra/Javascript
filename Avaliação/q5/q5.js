function encontrar_area_perimetro(raio){
    var area = 3.1415 * raio**2;
    var perimetro = 2*3.1415 * raio;
    area_perimetro = [area.toFixed(2), perimetro.toFixed(2)];
    return area_perimetro;
}

var calculo = encontrar_area_perimetro(3);

console.log(calculo);