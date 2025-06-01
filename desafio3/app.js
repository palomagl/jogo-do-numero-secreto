/*
Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function clicarCalcule(n1) {
    let resultado = "";
    for (let i = 1; i <= 10; i++ ) {
        resultado += (n1 * i) + " ";
    }
    console.log(resultado);
}

clicarCalcule(8)
*/


/*
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function indiceMassaCorporal(peso, altura) {
    let imc = peso / (altura * altura);
    console.log(imc.toFixed(2)); // toFixed é para fixar em no maximo 2 casas decimais
}
indiceMassaCorporal(50,1.60);
*/


/*
Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(n1) {
    // Começa com resultado igual a 1, pois 1 é o elemento neutro da multiplicação
    let resultado = 1;

    // Loop que vai de 1 até o número passado (n1)
    for (let i = 1; i <= n1; i++) {
        // Multiplica o resultado pelo número atual i
        resultado = resultado * i;
    }
     // Exibe o resultado do fatorial no console
    console.log(resultado);
}
// Chama a função fatorial passando 5 como argumento
fatorial(5);
*/


/*Crie uma função que converte um valor em dólar, passado como parâmetro, 
e retorna o valor equivalente em reais. Para isso, considere a cotação do 
dólar igual a R$4,80.

function converter_para_dolar(real) {
    const dolar = 4.80;
    let resultado = real / dolar;
    console.log((resultado.toFixed(2)));
    return resultado;
}


converter_para_dolar(30000); */

/*Crie uma função que mostre na tela a área e o perímetro de uma sala retangular,
utilizando altura e largura que serão dadas como parâmetro.

function medidor_area_perimetro_retangulo(altura,largura) {
    const area = altura * largura;
    const perímetro = 2 * (altura + largura);
    console.log("A area é:" + area + " E o perímetro é:" + perímetro + ".");

}
medidor_area_perimetro_retangulo(20,10);*/


/*Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14. 

function medidor_area_perimetro_circulo(raio) {
    const pi = 3.14;
    let area = pi * (raio **2);
    let perímetro = 2 * pi * raio;
    console.log("A area é:" + area.toFixed(2) + " E o perímetro é:" + perímetro.toFixed(2) + ".");
}

medidor_area_perimetro_circulo(5);*/
