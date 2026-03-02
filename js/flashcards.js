let currentFlashcardIndex = 0;
let isFlipped = false;
let studiedFlashcards = initFlashcardsStudied();

function loadFlashcard() {
    const flashcards = hubproData.flashcards;

    if (flashcards.length === 0) return;

    const card = flashcards[currentFlashcardIndex];

    document.getElementById("flashcard-question").innerText = card.front;
    document.getElementById("flashcard-answer").innerText = card.back;

    updateFlashcardStats();
}

function flipCard() {
    const card = document.getElementById("flashcard");

    isFlipped = !isFlipped;

    if (isFlipped) {
        card.style.transform = "rotateY(180deg) scale(1.03)";
    } else {
        card.style.transform = "rotateY(0deg) scale(1)";
    }
}

function nextFlashcard() {
    currentFlashcardIndex++;

    if (currentFlashcardIndex >= hubproData.flashcards.length) {
        currentFlashcardIndex = 0;
    }

    resetFlashcard();
    loadFlashcard();
}

function prevFlashcard() {
    currentFlashcardIndex--;

    if (currentFlashcardIndex < 0) {
        currentFlashcardIndex = hubproData.flashcards.length - 1;
    }

    resetFlashcard();
    loadFlashcard();
}

function resetFlashcard() {
    isFlipped = false;
    const card = document.getElementById("flashcard");
    card.style.transform = "rotateY(0deg) scale(1)";
}

function markFlashcardAsStudied() {
    const flashcards = hubproData.flashcards;
    const card = flashcards[currentFlashcardIndex];

    studiedFlashcards[card.id] = true;
    saveData("flashcards_studied", studiedFlashcards);

    updateFlashcardStats();
}

function updateFlashcardStats() {
    const total = hubproData.flashcards.length;
    const studied = Object.values(studiedFlashcards).filter(v => v).length;
    const pending = total - studied;
    const progress = total > 0 ? Math.round((studied / total) * 100) : 0;

    document.getElementById("fc-total").innerText = total;
    document.getElementById("fc-studied").innerText = studied;
    document.getElementById("fc-pending").innerText = pending;
    document.getElementById("fc-progress").innerText = progress + "%";
}

// Carregar ao abrir a página
document.addEventListener("DOMContentLoaded", loadFlashcard);