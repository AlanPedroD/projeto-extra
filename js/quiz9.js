const quizData = [
  {
      question: "Qual era a principal atividade econômica do Brasil Colônia?",
      choices: ["Indústria têxtil", "Cultivo de café", "Exploração de ouro e diamantes", "Pecuária"],
      correct: "Cultivo de café"
  },
  {
      question: "Quem proclamou a independência do Brasil?",
      choices: ["Dom Pedro I", "Tiradentes", "Getúlio Vargas", "Deodoro da Fonseca"],
      correct: "Dom Pedro I"
  },
  {
      question: "Qual período da história do Brasil ficou conhecido como República Velha?",
      choices: ["1889 a 1930", "1930 a 1945", "1945 a 1964", "1964 a 1985"],
      correct: "1889 a 1930"
  },
  {
      question: "Qual era o principal meio de transporte utilizado pelos indígenas brasileiros antes da chegada dos europeus?",
      choices: ["Aviões", "Navios", "Canoas", "Carroças"],
      correct: "Canoas"
  },
  {
      question: "Qual foi o principal motivo da Guerra dos Canudos?",
      choices: ["Questões políticas", "Conflitos religiosos", "Disputa por terras", "Todas as alternativas"],
      correct: "Todas as alternativas"
  }
];

let currentQuestion = 0;
let score = 0;
let ranking = [];

// Randomizar perguntas
quizData.sort(() => Math.random() - 0.5);

const correctSound = new Audio('../audio/fire.mp3');
const wrongSound = new Audio('../audio/buzzer.mp3');

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const feedbackElement = document.getElementById("feedback");
    
    feedbackElement.textContent = "";
    choicesElement.innerHTML = "";

    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;

    currentQuiz.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice) {
    const feedbackElement = document.getElementById("feedback");

    if (choice === quizData[currentQuestion].correct) {
        feedbackElement.textContent = "Correto!";
        feedbackElement.style.color = "green";
        correctSound.play();
        score++;
    } else {
        feedbackElement.textContent = "Errado!";
        feedbackElement.style.color = "red";
        wrongSound.play();
    }

    document.getElementById("next-btn").style.display = "block";

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
    document.getElementById("next-btn").style.display = "none";
}

function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <div class="end-quiz-message">
            <h2>Fim do quiz!</h2>
            <h3>Sua pontuação: ${score}</h3>
        </div>`;
    document.getElementById("end-quiz-options").style.display = "block";
    updateRanking();
}

function updateRanking() {
    ranking.push(score);
    ranking.sort((a, b) => b - a); 

    const rankingElement = document.getElementById("ranking");
    if (rankingElement) {
        rankingElement.innerHTML = "";
    
        ranking.slice(0, 5).forEach((points, index) => {  // Exibe apenas o top 5
            const listItem = document.createElement("li");
            listItem.textContent = `Jogador ${index + 1}: ${points} pontos`;
            rankingElement.appendChild(listItem);
        });
    }

    localStorage.setItem("quizRanking", JSON.stringify(ranking));
}

function loadRanking() {
    const storedRanking = localStorage.getItem("quizRanking");
    if (storedRanking) {
        ranking = JSON.parse(storedRanking);
        updateRanking();
    }
}

// Adicionar função para carregar o ranking na página inicial
function loadRankingHomePage() {
    const storedRanking = localStorage.getItem("quizRanking");
    if (storedRanking) {
        ranking = JSON.parse(storedRanking);

        const rankingList = document.getElementById("ranking-list");
        if (rankingList) {
            rankingList.innerHTML = "";

            ranking.slice(0, 5).forEach((points, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = `Jogador ${index + 1}: ${points} pontos`;
                rankingList.appendChild(listItem);
            });
        }
    }
}

function restartQuiz() {
    // Se estiver em outra página, redireciona para quiz.html
    window.location.href = "quiz9.html";  
}

function goToHomePage() {
    window.location.href = "pag-quizzes.html"; // Troque para o URL da página inicial
}

document.addEventListener("DOMContentLoaded", () => {
    const isQuizPage = document.getElementById("question");  // Verifica se é a página de quiz
    if (isQuizPage) {
        loadQuestion();
        loadRanking();
        document.getElementById("next-btn").style.display = "none";
    } else {
        loadRankingHomePage();  // Se não for a página de quiz, carrega o ranking na home
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("intro-text");
    const text = textElement.innerHTML;
    const typingSpeed = 50; // Velocidade da digitação em milissegundos
    const pauseDuration = 1500; // Tempo de pausa antes de recomeçar (em milissegundos)

    function typeWriter() {
        let index = 0;
        textElement.innerHTML = ""; // Limpa o texto inicial

        function type() {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            } else {
                // Após terminar de digitar, aguarda a pausa e reinicia o efeito
                setTimeout(typeWriter, pauseDuration);
            }
        }

        type(); // Inicia o efeito
    }

    typeWriter(); // Chama a função pela primeira vez
});
