const flashcards = [
    { repere: "Intuition", definition: "Génie" },
    { repere: "Discursif", definition: "Langage" },
    { repere: "Médiat", definition: "Immédiat" }
];

let currentIndex = 0;

function flipCard() {
    const card = document.querySelector('.flashcard');
    card.classList.toggle('flipped');
}

function updateCard() {
    const repereName = document.querySelector('.repere-name');
    const repereDefinition = document.querySelector('.repere-definition');

    repereName.textContent = flashcards[currentIndex].repere;
    repereDefinition.textContent = flashcards[currentIndex].definition;
}

function nextCard() {
    const card = document.querySelector('.flashcard');
    card.classList.remove('flipped');
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateCard();
}

function knowCard() {
    // Implement your logic to handle knowing the card
}

function resetCards() {
    // Implement your logic to reset the flashcards
}

document.addEventListener('DOMContentLoaded', () => {
    updateCard();
});
