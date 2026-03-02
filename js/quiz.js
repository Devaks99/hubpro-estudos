let currentQuiz = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuizModules() {
    const container = document.getElementById("quiz-modules");
    container.innerHTML = "";

    hubproData.quizzes.forEach(quiz => {
        const btn = document.createElement("button");
        btn.className = "bg-white p-4 rounded-lg border border-gray-200 hover:bg-blue-50 transition";
        btn.innerText = quiz.title;
        btn.onclick = () => startQuiz(quiz.id);
        container.appendChild(btn);
    });
}

function startQuiz(quizId) {
    currentQuiz = hubproData.quizzes.find(q => q.id === quizId);
    currentQuestionIndex = 0;
    correctAnswers = 0;

    document.getElementById("quiz-start").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("quiz-results").classList.add("hidden");

    loadQuizQuestion();
}

function loadQuizQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];

    document.getElementById("quiz-question").innerText = question.question;
    document.getElementById("quiz-counter").innerText =
        `Questão ${currentQuestionIndex + 1} de ${currentQuiz.questions.length}`;

    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    document.getElementById("quiz-progress").style.width = progress + "%";

    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "w-full p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition";
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const question = currentQuiz.questions[currentQuestionIndex];

    if (selectedIndex === question.correct) {
        correctAnswers++;
    }

    document.getElementById("quiz-next-btn").classList.remove("hidden");
}

function nextQuizQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= currentQuiz.questions.length) {
        finishQuiz();
        return;
    }

    document.getElementById("quiz-next-btn").classList.add("hidden");
    loadQuizQuestion();
}

function finishQuiz() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("quiz-results").classList.remove("hidden");

    const total = currentQuiz.questions.length;
    const percentage = Math.round((correctAnswers / total) * 100);

    document.getElementById("result-correct").innerText = correctAnswers;
    document.getElementById("result-wrong").innerText = total - correctAnswers;
    document.getElementById("result-percentage").innerText = percentage + "%";

    updateQuizResults(currentQuiz.id, correctAnswers, total);
}

function resetQuiz() {
    document.getElementById("quiz-results").classList.add("hidden");
    document.getElementById("quiz-start").classList.remove("hidden");
}

// Carregar módulos ao abrir
document.addEventListener("DOMContentLoaded", loadQuizModules);