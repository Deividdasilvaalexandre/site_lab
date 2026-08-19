// ==================================================
// CARROSSEL 1 - TIA PORTAL
// ==================================================

const imagens = [
    "./img/Captura de tela 2026-07-03 142416.png",
    "./img/Captura de tela 2026-07-03 142450.png",
    "./img/Captura de tela 2026-07-03 142514.png",
    "./img/Captura de tela 2026-07-03 142608.png",
    "./img/Captura de tela 2026-07-03 142622.png",
    "./img/Captura de tela 2026-07-03 142635.png"
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


// ==================================================
// CARROSSEL 2 - EXEMPLO 1
// ==================================================

const imagensExemplo1 = [

    "./img/Captura de tela 2026-07-03 142730.png",
    "./img/Captura de tela 2026-07-03 142815.png",
    "./img/Captura de tela 2026-07-03 142912.png",
    "./img/Captura de tela 2026-07-03 143011.png",
    "./img/Captura de tela 2026-07-03 143024.png",
    "./img/Captura de tela 2026-07-03 143106.png",
    "./img/Captura de tela 2026-07-03 143156.png",
    "./img/Captura de tela 2026-07-03 143333.png"

];


// TEXTOS CORRESPONDENTES A CADA IMAGEM

const textosExemplo1 = [

    `Em seguida, realiza-se a declaração detalhada das variáveis (tags). Para este exemplo, foram criadas duas tags do tipo booleano: a entrada de comando botao_liga, associada ao endereço físico de entrada %I0.0, e a saída de acionamento motor, associada ao endereço %Q0.0. Após definir os tipos de dados e os endereços correspondentes na tabela, a base da arquitetura de sinal da CPU está concluída.`,

    `Com os sinais configurados, o próximo passo é criar a lógica de controle. Acessa-se a árvore do projeto e abre-se o bloco de execução principal Main [OB1]. Na Network 1 da linguagem Ladder (LAD), insere-se um contato normalmente aberto atribuído à tag botao_liga, conectado diretamente a uma bobina de saída atribuída à tag motor. Esta estrutura simples garante que a saída seja energizada no exato momento em que a entrada correspondente for acionada.`,

    `Finalizada a programação, inicia-se o processo de testes e validação abrindo o S7-PLCSIM V20. Ao selecionar a opção de simulação na barra superior do TIA Portal, o ambiente virtual de simulação abre automaticamente. Nele, adiciona-se uma nova instância do controlador — neste caso, uma CPU da linha S7-1200 —, habilitando o ambiente simulado para receber a compilação e o programa.`,

    `Com o simulador ativo, realiza-se o descarregamento da aplicação abrindo a janela Extended download to device. Define-se o tipo de interface PG/PC como PN/IE e a sub-interface de conexão como PLCSIM. Ao clicar em Start search, o software varre a rede virtual e localiza a CPU emulada, geralmente sob o IP 192.168.0.1. Seleciona-se o dispositivo encontrado e clica-se no botão Load para transferir as configurações de hardware e o bloco de código.`,

    `Na sequência, a janela Load results apresenta o status da transferência do projeto. Para colocar o controlador simulado em modo de execução logo após o descarregamento, altera-se a opção do campo de ação para Start module e confirma-se a operação clicando no botão Finish. A partir deste momento, a CPU simulada entra no estado RUN.`,

    `Para manipular as variáveis de entrada de forma rápida durante os testes, retorna-se ao ambiente do S7-PLCSIM V20 e navega-se no painel lateral direito para criar uma nova tabela de simulação (SIM Table). Essa tabela permite forçar e visualizar os estados das variáveis físicas diretamente na simulação sem a necessidade de um painel IHM externo.`,

    `Por fim, insere-se as variáveis botao_liga e motor dentro da SimTable recém-criada e ativa-se o modo de monitoramento no TIA Portal clicando no ícone dos óculos (Monitoring ON/OFF). Ao alterar o estado da entrada botao_liga para TRUE dentro da SimTable, observa-se em tempo real na tela do Main [OB1] a linha do circuito em Ladder ficar verde, confirmando que o sinal passou pelo contato e acionou com sucesso a saída motor.`,

    `Após a execução do teste, verifica-se o comportamento do programa e confirma-se que a lógica implementada corresponde ao funcionamento esperado. O acionamento da entrada botao_liga provoca a energização da saída motor, permitindo validar a comunicação entre a lógica Ladder e o controlador simulado.`

];


let indiceExemplo1 = 0;

const imagemExemplo1 =
    document.getElementById("imagemExemplo1");

const textoExemplo1 =
    document.getElementById("textoExemplo1");

const anteriorExemplo1 =
    document.getElementById("anteriorExemplo1");

const proximoExemplo1 =
    document.getElementById("proximoExemplo1");


// ATUALIZA IMAGEM E TEXTO

function atualizarExemplo1() {

    imagemExemplo1.src =
        imagensExemplo1[indiceExemplo1];

    textoExemplo1.textContent =
        textosExemplo1[indiceExemplo1];

}


// BOTÃO PRÓXIMO

proximoExemplo1.addEventListener("click", () => {

    indiceExemplo1++;

    if (indiceExemplo1 >= imagensExemplo1.length) {
        indiceExemplo1 = 0;
    }

    atualizarExemplo1();

});


// BOTÃO ANTERIOR

anteriorExemplo1.addEventListener("click", () => {

    indiceExemplo1--;

    if (indiceExemplo1 < 0) {
        indiceExemplo1 = imagensExemplo1.length - 1;
    }

    atualizarExemplo1();

});


// ==================================================
// TROCA DE SEÇÕES
// ==================================================

function mostrar(secao) {

    document.getElementById("externo").style.display = "none";

    document.getElementById("interno").style.display = "none";

    document.getElementById(secao).style.display = "block";

}


// ==================================================
// CARROSSEL 3 - ORGANIZATION BLOCK (OB)
// ==================================================

const imagensOB = [

    "./img/Captura de tela 2026-08-14 141557.png",
    "./img/Captura de tela 2026-08-14 141611.png",
    "./img/Captura de tela 2026-08-14 141620.png",
    "./img/Captura de tela 2026-08-14 141631.png",
    "./img/Captura de tela 2026-08-14 141751.png",
    "./img/Captura de tela 2026-08-14 141802.png"

];


const textosOB = [

    "Texto 1",
    "Texto 2",
    "Texto 3",
    "Texto 4"

];


let indiceOB = 0;


const imagemOB =
    document.getElementById("imagemExemplo");

const textoOB =
    document.getElementById("textoExemplo");

const anteriorOB =
    document.getElementById("anteriorExemplo");

const proximoOB =
    document.getElementById("proximoExemplo");


// ATUALIZA IMAGEM E TEXTO

function atualizarOB() {

    imagemOB.src =
        imagensOB[indiceOB];

    if (textosOB[indiceOB] !== undefined) {

        textoOB.textContent =
            textosOB[indiceOB];

    }

}


// BOTÃO PRÓXIMO

proximoOB.addEventListener("click", () => {

    indiceOB++;

    if (indiceOB >= imagensOB.length) {
        indiceOB = 0;
    }

    atualizarOB();

});


// BOTÃO ANTERIOR

anteriorOB.addEventListener("click", () => {

    indiceOB--;

    if (indiceOB < 0) {
        indiceOB = imagensOB.length - 1;
    }

    atualizarOB();

});