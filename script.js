// ==================================================
// CARROSSEL 1 - PASSO A PASSO TIA PORTAL
// ==================================================
const imagensTia = [
    "./img/Captura de tela 2026-07-03 142416.png",
    "./img/Captura de tela 2026-07-03 142450.png",
    "./img/Captura de tela 2026-07-03 142514.png",
    "./img/Captura de tela 2026-07-03 142608.png",
    "./img/Captura de tela 2026-07-03 142622.png",
    "./img/Captura de tela 2026-07-03 142635.png"
];


let indiceTia = 0;
const imagemTia = document.getElementById("imagem");
const anteriorTia = document.getElementById("anterior");
const proximoTia = document.getElementById("proximo");


function atualizarTia() {
    imagemTia.src = imagensTia[indiceTia];
}


proximoTia.addEventListener("click", () => {
    indiceTia = (indiceTia + 1) % imagensTia.length;
    atualizarTia();
});


anteriorTia.addEventListener("click", () => {
    indiceTia = (indiceTia - 1 + imagensTia.length) % imagensTia.length;
    atualizarTia();
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


const textosExemplo1 = [
    `Em seguida, realiza-se a declaração detalhada das variáveis (tags). Para este exemplo, foram criadas duas tags do tipo booleano: a entrada de comando botao_liga, associada ao endereço físico de entrada %I0.0, e a saída de acionamento motor, associada ao endereço %Q0.0.`,
    `Com os sinais configurados, o próximo passo é criar a lógica de controle no bloco Main [OB1]...`,
    `Finalizada a programação, inicia-se o processo de testes e validação abrindo o S7-PLCSIM V20...`,
    `Com o simulador ativo, realiza-se o descarregamento da aplicação abrindo a janela Extended download to device...`,
    `Na sequência, a janela Load results apresenta o status da transferência do projeto...`,
    `Para manipular as variáveis de entrada de forma rápida durante os testes, cria-se uma nova tabela de simulação (SIM Table)...`,
    `Por fim, insere-se as variáveis botao_liga e motor dentro da SimTable recém-criada e ativa-se o monitoramento...`,
    `Após a execução do teste, verifica-se o comportamento do programa e confirma-se o funcionamento esperado.`
];


let indiceExemplo1 = 0;
const imagemExemplo1 = document.getElementById("imagemExemplo1");
const textoExemplo1 = document.getElementById("textoExemplo1");
const anteriorExemplo1 = document.getElementById("anteriorExemplo1");
const proximoExemplo1 = document.getElementById("proximoExemplo1");


function atualizarExemplo1() {
    imagemExemplo1.src = imagensExemplo1[indiceExemplo1];
    textoExemplo1.textContent = textosExemplo1[indiceExemplo1];
}


proximoExemplo1.addEventListener("click", () => {
    indiceExemplo1 = (indiceExemplo1 + 1) % imagensExemplo1.length;
    atualizarExemplo1();
});


anteriorExemplo1.addEventListener("click", () => {
    indiceExemplo1 = (indiceExemplo1 - 1 + imagensExemplo1.length) % imagensExemplo1.length;
    atualizarExemplo1();
});




// ==================================================
// CARROSSEL 3 - COMPARADORES
// ==================================================
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


let indiceComp = 0;
const imagemComp = document.getElementById("imagemComp");
const textoComp = document.getElementById("textoComp");
const anteriorComp = document.getElementById("anteriorComp");
const proximoComp = document.getElementById("proximoComp");


function atualizarComp() {
    imagemComp.src = imagensComp[indiceComp];
    textoComp.textContent = textosComp[indiceComp];
}


proximoComp.addEventListener("click", () => {
    indiceComp = (indiceComp + 1) % imagensComp.length;
    atualizarComp();
});


anteriorComp.addEventListener("click", () => {
    indiceComp = (indiceComp - 1 + imagensComp.length) % imagensComp.length;
    atualizarComp();
});




// ==================================================
// CARROSSEL 4 - TEMPORIZADORES (TIMERS)
// ==================================================
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


let indiceTimer = 0;
const imagemTimer = document.getElementById("imagemTimer");
const textoTimer = document.getElementById("textoTimer");
const anteriorTimer = document.getElementById("anteriorTimer");
const proximoTimer = document.getElementById("proximoTimer");


function atualizarTimer() {
    imagemTimer.src = imagensTimer[indiceTimer];
    textoTimer.textContent = textosTimer[indiceTimer];
}


proximoTimer.addEventListener("click", () => {
    indiceTimer = (indiceTimer + 1) % imagensTimer.length;
    atualizarTimer();
});


anteriorTimer.addEventListener("click", () => {
    indiceTimer = (indiceTimer - 1 + imagensTimer.length) % imagensTimer.length;
    atualizarTimer();
});




// ==================================================
// CARROSSEL 5 - CONTADORES (COUNTERS)
// ==================================================
const imagensCounter = [
    "./img/Captura de tela 2026-08-14 141817.png",
    "./img/Captura de tela 2026-08-14 141839.png",
    "./img/Captura de tela 2026-08-14 141829.png"
];


const textosCounter = [
    "CTU (Count Up %DB4): Contador crescente. Incrementar a contagem em CV a cada pulso em CU. Ativa a saída Q quando atinge PV (5).",
    "CTD (Count Down %DB5): Contador decrescente. Decrementa o valor de CV a cada pulso na entrada CD a partir do valor predefinido PV (5).",
    "CTUD (Count Up/Down %DB6): Contador progressivo/regressivo. Permite incrementar (CU) ou decrementar (CD) a contagem no mesmo bloco."
];


let indiceCounter = 0;
const imagemCounter = document.getElementById("imagemCounter");
const textoCounter = document.getElementById("textoCounter");
const anteriorCounter = document.getElementById("anteriorCounter");
const proximoCounter = document.getElementById("proximoCounter");


function atualizarCounter() {
    imagemCounter.src = imagensCounter[indiceCounter];
    textoCounter.textContent = textosCounter[indiceCounter];
}


proximoCounter.addEventListener("click", () => {
    indiceCounter = (indiceCounter + 1) % imagensCounter.length;
    atualizarCounter();
});


anteriorCounter.addEventListener("click", () => {
    indiceCounter = (indiceCounter - 1 + imagensCounter.length) % imagensCounter.length;
    atualizarCounter();
});

