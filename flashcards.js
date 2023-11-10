const flashcards = [
    { front: "Qu'est-ce que la philosophie?", back: "La philosophie est l'amour de la sagesse." },
    { front: "Qui est Socrate?", back: "Socrate était un philosophe grec célèbre pour sa méthode d'enseignement par questionnement." },
    // Ajoutez autant de flashcards que nécessaire
];

let currentFlashcardIndex = 0;

const frontFace = document.getElementById('front-face');
const backFace = document.getElementById('back-face');
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', showNextFlashcard);

function showNextFlashcard() {
    if (currentFlashcardIndex < flashcards.length) {
        const flashcard = flashcards[currentFlashcardIndex];
        frontFace.textContent = flashcard.front;
        backFace.textContent = flashcard.back;
        currentFlashcardIndex++;
    } else {
        alert("Vous avez terminé toutes les flashcards!");
    }
}
