// Liste des cartes avec le recto et le verso
const cards = [
    { front: "Question 1", back: "Réponse 1" },
    { front: "Question 2", back: "Réponse 2" },
    // Ajoutez d'autres cartes au besoin
];

// Mélanger les cartes aléatoirement
const shuffledCards = shuffleArray(cards);

// Initialiser les piles de cartes
let masteredCards = [];
let toReviewCards = shuffledCards.slice(); // Copie des cartes mélangées

// Sélectionner la première carte
let currentCard = toReviewCards.pop();
displayCard(currentCard);

// Fonction pour afficher une carte
function displayCard(card) {
    document.getElementById('flashcard-front').textContent = card.front;
    document.getElementById('flashcard-back').textContent = card.back;
}

// Fonction pour gérer le bouton "Suivant"
function nextCard() {
    // Déplacer la carte actuelle dans la pile appropriée
    const isMastered = confirm("Avez-vous maîtrisé cette carte ?");
    if (isMastered) {
        masteredCards.push(currentCard);
    } else {
        toReviewCards.unshift(currentCard);
    }

    // Sélectionner la prochaine carte
    if (toReviewCards.length > 0) {
        currentCard = toReviewCards.pop();
        displayCard(currentCard);
    } else if (masteredCards.length > 0) {
        alert("Vous avez maîtrisé toutes les cartes !");
    } else {
        alert("Vous avez révisé toutes les cartes !");
    }
}

// Fonction pour mélanger un tableau aléatoirement
function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
