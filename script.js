/* ==================================================
   FUNÇÃO PARA MOSTRAR AS SEÇÕES DO INDEX
================================================== */

function mostrar(secao) {
    const externo = document.getElementById("externo");
    const interno = document.getElementById("interno");

    if (!externo || !interno) {
        return;
    }

    if (secao === "externo") {
        externo.style.display = "block";
        interno.style.display = "none";
    }

    if (secao === "interno") {
        externo.style.display = "none";
        interno.style.display = "block";
    }
}


/* ==================================================
   FUNÇÃO GENÉRICA PARA TODOS OS CARROSSÉIS
================================================== */

function criarCarrossel({
    imagens,
    textos = null,
    imagemId,
    textoId = null,
    anteriorId,
    proximoId
}) {
    const imagem = document.getElementById(imagemId);
    const texto = textoId
        ? document.getElementById(textoId)
        : null;

    const anterior = document.getElementById(anteriorId);
    const proximo = document.getElementById(proximoId);

    /*
        Como o mesmo JS é usado em todas as páginas,
        verificamos se os elementos existem.
    */

    if (!imagem || !anterior || !proximo) {
        return;
    }

    let indice = 0;

    function atualizar() {
        imagem.src = imagens[indice];

        if (texto && textos) {
            texto.textContent = textos[indice];
        }
    }

    proximo.addEventListener("click", function () {
        indice++;

        if (indice >= imagens.length) {
            indice = 0;
        }

        atualizar();
    });

    anterior.addEventListener("click", function () {
        indice--;

        if (indice < 0) {
            indice = imagens.length - 1;
        }

        atualizar();
    });

    atualizar();
}


/* ==================================================
   CARROSSEL 1 - TIA PORTAL
================================================== */

const imagensTia = [
    "./img/Captura de tela 2026-07-03 142416.png",
    "./img/Captura de tela 2026-07-03 142450.png",
    "./img/Captura de tela 2026-07-03 142514.png",
    "./img/Captura de tela 2026-07-03 142608.png",
    "./img/Captura de tela 2026-07-03 142622.png",
    "./img/Captura de tela 2026-07-03 142635.png"
];

criarCarrossel({
    imagens: imagensTia,
    imagemId: "imagem",
    anteriorId: "anterior",
    proximoId: "proximo"
});


/* ==================================================
   CARROSSEL 2 - EXEMPLO 1
================================================== */

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

const textosExemplo1 = [
    "Em seguida, realiza-se a declaração detalhada das variáveis (tags). Para este exemplo, foram criadas duas tags do tipo booleano: a entrada de comando botao_liga, associada ao endereço físico de entrada %I0.0, e a saída de acionamento motor, associada ao endereço %Q0.0.",

    "Com os sinais configurados, o próximo passo é criar a lógica de controle no bloco Main [OB1].",

    "Finalizada a programação, inicia-se o processo de testes e validação abrindo o S7-PLCSIM V20.",

    "Com o simulador ativo, realiza-se o descarregamento da aplicação abrindo a janela Extended download to device.",

    "Na sequência, a janela Load results apresenta o status da transferência do projeto.",

    "Para manipular as variáveis de entrada de forma rápida durante os testes, cria-se uma nova tabela de simulação (SIM Table).",

    "Por fim, inserem-se as variáveis botao_liga e motor dentro da SimTable recém-criada e ativa-se o monitoramento.",

    "Após a execução do teste, verifica-se o comportamento do programa e confirma-se o funcionamento esperado."
];

criarCarrossel({
    imagens: imagensExemplo1,
    textos: textosExemplo1,
    imagemId: "imagemExemplo1",
    textoId: "textoExemplo1",
    anteriorId: "anteriorExemplo1",
    proximoId: "proximoExemplo1"
});


/* ==================================================
   CARROSSEL 3 - COMPARADORES
================================================== */

const imagensComp = [
    "./img/Captura de tela 2026-08-14 141557.png",
    "./img/Captura de tela 2026-08-14 141611.png",
    "./img/Captura de tela 2026-08-14 141620.png",
    "./img/Captura de tela 2026-08-14 141631.png",
    "./img/Captura de tela 2026-08-14 141751.png",
    "./img/Captura de tela 2026-08-14 141802.png"
];

const textosComp = [
    "Igualdade (==): Ativa a saída se o valor retido for IGUAL ao valor de referência (5).",

    "Diferente (<>): Ativa a saída se o valor for DIFERENTE do valor de referência (5).",

    "Maior ou Igual (>=): Ativa a saída se o valor for MAIOR OU IGUAL a 5.",

    "Menor ou Igual (<=): Ativa a saída se o valor for MENOR OU IGUAL a 5.",

    "Menor que (<): Ativa a saída se o valor for estritamente MENOR que 5.",

    "Maior que (>): Ativa a saída se o valor for estritamente MAIOR que 5."
];

criarCarrossel({
    imagens: imagensComp,
    textos: textosComp,
    imagemId: "imagemComp",
    textoId: "textoComp",
    anteriorId: "anteriorComp",
    proximoId: "proximoComp"
});


/* ==================================================
   CARROSSEL 4 - TEMPORIZADORES
================================================== */

const imagensTimer = [
    "./img/Captura de tela 2026-08-14 141849.png",
    "./img/Captura de tela 2026-08-14 141907.png",
    "./img/Captura de tela 2026-08-14 141901.png"
];

const textosTimer = [
    "TON (Timer On Delay %DB1): Atraso na ligação. Mantém a saída Q desligada até que a entrada IN fique ativa pelo tempo configurado (PT = 5s).",

    "TOF (Timer Off Delay %DB2): Atraso no desligamento. Mantém a saída Q ligada durante o tempo programado (PT = 5s) após a entrada IN ir para nível baixo.",

    "TP (Timer Pulse %DB3): Pulso temporizado. Mantém a saída Q ligada por uma duração fixa (PT = 5s) assim que um pulso é detectado na entrada IN."
];

criarCarrossel({
    imagens: imagensTimer,
    textos: textosTimer,
    imagemId: "imagemTimer",
    textoId: "textoTimer",
    anteriorId: "anteriorTimer",
    proximoId: "proximoTimer"
});


/* ==================================================
   CARROSSEL 5 - CONTADORES
================================================== */

const imagensCounter = [
    "./img/Captura de tela 2026-08-14 141817.png",
    "./img/Captura de tela 2026-08-14 141839.png",
    "./img/Captura de tela 2026-08-14 141829.png"
];

const textosCounter = [
    "CTU (Count Up %DB4): Contador crescente. Incrementa a contagem em CV a cada pulso em CU. Ativa a saída Q quando atinge PV (5).",

    "CTD (Count Down %DB5): Contador decrescente. Decrementa o valor de CV a cada pulso na entrada CD a partir do valor predefinido PV (5).",

    "CTUD (Count Up/Down %DB6): Contador progressivo/regressivo. Permite incrementar (CU) ou decrementar (CD) a contagem no mesmo bloco."
];

criarCarrossel({
    imagens: imagensCounter,
    textos: textosCounter,
    imagemId: "imagemCounter",
    textoId: "textoCounter",
    anteriorId: "anteriorCounter",
    proximoId: "proximoCounter"
});
