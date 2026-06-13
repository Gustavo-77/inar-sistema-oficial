// ==========================
// INAR 2026
// Sistema Integrado de
// Avaliação Relacional
// ==========================

let etapaAtual = 1;

let resultadoFinalTexto = "";
let parecerFinalTexto = "";

// ==========================
// NAVEGAÇÃO
// ==========================

function proximaEtapa(numero){

document
.querySelectorAll(".tela")
.forEach(tela=>{

tela.classList.remove("ativa");

});

document
.getElementById(
`etapa${numero}`
)
.classList.add("ativa");

etapaAtual = numero;

// Processamento

if(numero === 9){

iniciarAnalise();

}

// Relatório

if(numero === 10){

gerarRelatorio();

}

// Certificado

if(numero === 12){

preencherCertificado();

}

}

// ==========================
// ANÁLISE
// ==========================

function iniciarAnalise(){

const progresso =
document.getElementById(
"progresso"
);

const status =
document.getElementById(
"statusAnalise"
);

let valor = 0;

const mensagens = [

"Consultando indicadores nacionais...",

"Executando análise preditiva...",

"Calculando reciprocidade...",

"Verificando padrões comportamentais...",

"Comparando respostas...",

"Gerando parecer técnico..."

];

let indice = 0;

const intervalo =
setInterval(()=>{

valor += 2;

progresso.style.width =
valor + "%";

if(valor % 18 === 0){

status.innerText =
mensagens[
indice %
mensagens.length
];

indice++;

}

if(valor >= 100){

clearInterval(
intervalo
);

status.innerText =
"Relatório concluído.";

setTimeout(()=>{

proximaEtapa(10);

},1500);

}

},120);

}

// ==========================
// GERAR RELATÓRIO
// ==========================

function numeroAleatorio(
min,
max
){

return Math.floor(
Math.random() *
(max-min+1)
)+min;

}

function gerarRelatorio(){

const compatibilidade =
numeroAleatorio(
40,
98
);

const interesse =
numeroAleatorio(
30,
100
);

const reciprocidade =
numeroAleatorio(
20,
95
);

const friendzone =
numeroAleatorio(
5,
90
);

const troca =
numeroAleatorio(
5,
95
);

const persistencia =
numeroAleatorio(
50,
100
);

document
.getElementById(
"compatibilidade"
)
.innerText =
compatibilidade;

document
.getElementById(
"interesse"
)
.innerText =
interesse;

document
.getElementById(
"reciprocidade"
)
.innerText =
reciprocidade;

document
.getElementById(
"friendzone"
)
.innerText =
friendzone;

document
.getElementById(
"troca"
)
.innerText =
troca;

document
.getElementById(
"persistencia"
)
.innerText =
persistencia;

// Resultado final

if(
compatibilidade >= 80 &&
interesse >= 75
){

resultadoFinalTexto =
"AINDA NO JOGO";

parecerFinalTexto =
"Os indicadores demonstram sinais consistentes de interesse e manutenção da interação.";

}

else if(
friendzone >= 70
){

resultadoFinalTexto =
"MELHOR AMIGO PREMIUM";

parecerFinalTexto =
"Foram detectados fortes indicadores compatíveis com processos avançados de friendzone.";

}

else if(
troca >= 70
){

resultadoFinalTexto =
"RISCO DE SUBSTITUIÇÃO";

parecerFinalTexto =
"Foram identificados padrões frequentemente associados à perda gradual de interesse.";

}

else{

resultadoFinalTexto =
"INTERESSE INCONSISTENTE";

parecerFinalTexto =
"Os dados apresentam sinais contraditórios e exigem acompanhamento contínuo.";

}

document
.getElementById(
"resultadoFinal"
)
.innerText =
resultadoFinalTexto;

document
.getElementById(
"parecerFinal"
)
.innerText =
parecerFinalTexto;

}
// ==========================
// CERTIFICADO
// ==========================

function gerarNumeroCertificado(){

const numero =
Math.floor(
100000 +
Math.random() * 900000
);

return `INAR-2026-${numero}`;

}

// ==========================
// DATA
// ==========================

function obterDataAtual(){

const hoje =
new Date();

return hoje.toLocaleDateString(
"pt-BR"
);

}

// ==========================
// PREENCHER CERTIFICADO
// ==========================

function preencherCertificado(){

const nome =
document.getElementById(
"nome"
).value;

const idade =
document.getElementById(
"idade"
).value;

const cidade =
document.getElementById(
"cidade"
).value;

const estado =
document.getElementById(
"estado"
).value;

const nomePessoa =
document.getElementById(
"nomePessoa"
).value;

const tempo =
document.getElementById(
"tempoConhece"
).value;

const status =
document.getElementById(
"statusRelacao"
).value;

// Nome

document
.getElementById(
"certNome"
)
.innerText =
nome.toUpperCase();

// Dados

document
.getElementById(
"certIdade"
)
.innerHTML =
`<b>Idade:</b> ${idade} anos`;

document
.getElementById(
"certCidade"
)
.innerHTML =
`<b>Cidade:</b> ${cidade}`;

document
.getElementById(
"certEstado"
)
.innerHTML =
`<b>Estado:</b> ${estado}`;

document
.getElementById(
"certPessoa"
)
.innerHTML =
`<b>Pessoa Avaliada:</b> ${nomePessoa}`;

document
.getElementById(
"certTempo"
)
.innerHTML =
`<b>Tempo de convivência:</b> ${tempo}`;

document
.getElementById(
"certStatus"
)
.innerHTML =
`<b>Status:</b> ${status}`;

// Resultado

document
.getElementById(
"certResultado"
)
.innerText =
resultadoFinalTexto;

// Parecer

document
.getElementById(
"certParecer"
)
.innerText =
parecerFinalTexto;

// Número do certificado

const codigo =
gerarNumeroCertificado();

const info =
document.createElement(
"p"
);

info.innerHTML =

`<br><b>Número:</b> ${codigo}
<br>
<b>Data:</b> ${obterDataAtual()}`;

document
.querySelector(
".certificado"
)
.appendChild(
info
);

// QR fake

document
.getElementById(
"qrcode"
)
.innerHTML =

`
QR CODE

<br><br>

${codigo}
`;

}

// ==========================
// DOWNLOAD
// ==========================

function baixarCertificado(){

alert(
"Para o download funcionar no GitHub Pages, será necessário adicionar a biblioteca html2canvas."
);

}

// ==========================
// VALIDAÇÃO
// ==========================

document
.addEventListener(
"DOMContentLoaded",
()=>{

document
.querySelectorAll(
"input"
)
.forEach(input=>{

input.autocomplete =
"off";

});

}
);

// ==========================
// MENSAGEM FINAL
// ==========================

console.log(
"INAR carregado com sucesso."
);
// ==========================
// VALIDAÇÃO CADASTRO
// ==========================

function validarCadastro(){

const nome = document.getElementById("nome").value.trim();
const idade = document.getElementById("idade").value.trim();
const cidade = document.getElementById("cidade").value.trim();
const estado = document.getElementById("estado").value.trim();

if(
nome === "" ||
idade === "" ||
cidade === "" ||
estado === ""
){

alert("Preencha todos os campos para continuar.");
return;

}

proximaEtapa(3);

}

// ==========================
// VALIDAÇÃO PESSOA
// ==========================

function validarPessoa(){

const nomePessoa =
document.getElementById("nomePessoa").value.trim();

const idadePessoa =
document.getElementById("idadePessoa").value.trim();

const tempoConhece =
document.getElementById("tempoConhece").value.trim();

const status =
document.getElementById("statusRelacao").value;

if(
nomePessoa === "" ||
idadePessoa === "" ||
tempoConhece === "" ||
status === "Status atual"
){

alert(
"Preencha todos os dados da pessoa avaliada."
);

return;

}

proximaEtapa(4);

}
