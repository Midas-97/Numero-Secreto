//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do numero secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerrerNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.5});
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {

        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Você descobriu o numero secreto! ${tentativas} ${mensagemTentativas}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reriniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", "O numero secreto é menor");
        } else{
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        //tentativas = tentativas + 1;
        tentativas ++;
        LimparCampo();
    }
    console.log("O botão foi clicado!");
    console.log(chute == numeroSecreto);
}

function gerrerNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerrerNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function LimparCampo() {
    chute = document.querySelector("input");
        chute.value = "";
    
}

function reiniciarJogo() {
    numeroSecreto = gerrerNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}




