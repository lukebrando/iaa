// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas sobre Arlecchino
const perguntas = [
    {
        enunciado: "Qual é a afiliação de Arlecchino em Genshin Impact?",
        alternativas: [
            "Fatui",
            "Cavaleiros de Favonius"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Qual é a visão de Arlecchino?",
        alternativas: [
            "Anemo",
            "Pyro"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual é o seu nome dentro da Organização?",
        alternativas: [
            "A Serva",
            "O Espectro do Caos"
        ],
        correta: 0
    },
    {
        enunciado: "Arlecchino tem alguma ligação com outros personagens da história?",
        alternativas: [
            "Sim, ela é Dona de um orfanato",
            "Não, ela é uma personagem isolada"
        ],
        correta: 0
    },
    {
        enunciado: "Qual é a principal característica de Arlecchino?",
        alternativas: [
            "Ela é muito emotiva",
            "Ela é calculista e fria"
        ],
        correta: 1
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

// FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Adiciona o texto da alternativa ao botão
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// FUNÇÃO MOSTRAR RESULTADO
function mostrarResultado() {
    caixaPerguntas.textContent = "";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
}

// Inicia o quiz
mostrarPergunta();