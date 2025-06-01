let listaDeNumerosSorteados = [];
let numeroLimite = 10;
// gera numero aleatorio no começo
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela ("h1", "Jogo do número secreto" );
    exibirTextoNaTela ("p", "Escolha um número entre 1 a 10");
}
exibirMensagemInicial();

// função para verificar os chutes
function verificarChute(){
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentitivas = `Você descobriu número secreto com  ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p",mensagemTentitivas);

        document.getElementById("reiniciar").removeAttribute("disabled");


    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementoNaLista == numeroEscolhido) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo ();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}