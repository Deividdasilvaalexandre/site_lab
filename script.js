const imagens = [
    "./imagens/Captura de tela 2026-07-03 142416.png",
    "./imagens/Captura de tela 2026-07-03 142450.png",
    "./imagens/Captura de tela 2026-07-03 142514.png",
    "./imagens/Captura de tela 2026-07-03 142608.png",
    "./imagens/Captura de tela 2026-07-03 142622.png",
    "./imagens/Captura de tela 2026-07-03 142635.png"
];

let indice = 0;

const imagem = document.getElementById("imagem");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

function atualizarImagem() {
    imagem.src = imagens[indice];
}

proximo.addEventListener("click", () => {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    atualizarImagem();
});

anterior.addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    atualizarImagem();
});

function mostrar(secao){

    document.getElementById("externo").style.display = "none";
    document.getElementById("interno").style.display = "none";

    document.getElementById(secao).style.display = "block";

}