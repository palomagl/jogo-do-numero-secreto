let titulo =document.querySelector("h1")
titulo.innerHTML = "Hora do Desafio"

function clicarConsole() {
    console.log("O botão foi clicado")
}

function clicarAlert() {
    console.log("eu amo JAVA SCRIPT")
}

function clicarPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil:");
    if (cidade ){
        alert("Estive em " + cidade + " e lembrei de você.")
    }
}

function clicarSoma(){
    let n1 = prompt("Digite um número:");
    let n2 = prompt("Digite outro número:");
    let soma = parseInt(n1) + parseInt(n2);
    if (soma){
        alert("A soma é:" + soma + "");
    }
}