function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

$(document).ready(function () {
    const concepts = [
        { concept: 'Essentiel', definition: 'Est essentiel ce qui relève de l’essence, c’est-à-dire de la nature, ou encore de la définition d’une chose.On parle de propriété essentielle au sujet d’une propriété qui, si on l’enlève, fait disparaître le sujet dont elle est la propriété. Ce sont des propriétés indispensables.' },
        { concept: 'Accidentel', definition: 'Est accidentel tout ce qui n’appartient à pas à l’essence d’une chose ; ce qui peut être ou ne pas être sans que cela ne change le sujet. Ce ne sont pas des propriétés indispensables.' },
        { concept: 'Nécessaire', definition: 'Est nécessaire ce qui ne peut pas ne pas exister, ou être différent. Un événement est nécessaire quand il est déterminé par une série de causes et d’effets. C’est ce dont le contraire est impossible.' },
        { concept: 'Contingent', definition: 'Est contingent ce qui peut ne pas exister, ou être différent. Un événement est contingent quand il est déterminé par des circonstances particulières. C’est ce dont le contraire est possible.' }
    ];

    let currentCardIndex = 0;
    let knowCount = 0;
    let reviewCount = 0;
    let revisedCount = 0;
    let evaluatedCards = [];
    let buttonClicked = false; // Nouvelle variable pour suivre si un bouton a été cliqué

    const card = $('#card');
    const knowBtn = $('#knowBtn');
    const nextBtn = $('#nextBtn');
    const reviewBtn = $('#reviewBtn');
    const knowCountSpan = $('#knowCount');
    const reviewCountSpan = $('#reviewCount');
    const revisedCountSpan = $('#revisedCount');
    const resetBtn = $('#resetBtn');
    const completionMessage = $('#completionMessage');
    const conceptText = $('#conceptText');
    const definitionText = $('#definitionText');

    function updateCard() {
        const currentCard = concepts[currentCardIndex];
        conceptText.text(currentCard.concept);
        definitionText.text(currentCard.definition);
    }

    function resetCounts() {
        knowCount = 0;
        reviewCount = 0;
        knowCountSpan.text(knowCount);
        reviewCountSpan.text(reviewCount);
    }

    function showCompletionMessage() {
        completionMessage.show();
        createConfetti();
    }    
    
    function createConfetti() {
        console.log('Creating confetti...'); // Ajout d'un log pour débogage
    
        const duration = 10 * 1000; // durée de l'explosion en millisecondes (10 secondes ici)
    
        particlesJS("confetti-canvas", {
            particles: {
                number: { value: 100 },
                size: { value: 3 },
                color: { value: "#ff6e81" },
                shape: { type: "circle" },
                move: { direction: "random", speed: 6 },
                opacity: { value: 0.9, random: true },
            },
            interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
        });
    
        setTimeout(() => {
            // Clear the confetti effect
            particlesJS("confetti-canvas", {});
            console.log('Confetti cleared.'); // Ajout d'un log pour débogage
        }, duration);
    }       

    function hideCompletionMessage() {
        completionMessage.hide();
    }

    function showCard() {
        if (!completionMessage.is(':visible')) {
            if (buttonClicked) { // Vérifier si un bouton a été cliqué
                if (currentCardIndex < concepts.length - 1) {
                    currentCardIndex++;
                } else {
                    // Vérifier si toutes les cartes ont été évaluées
                    if (evaluatedCards.length === concepts.length) {
                        // Ne rien faire ici, car le message de complétion a déjà été affiché
                    } else {
                        // Incrémenter le compteur une dernière fois lorsque le message de complétion s'affiche
                        revisedCountSpan.text(++revisedCount);
                        showCompletionMessage();
                        return;
                    }
                }
                updateCard();
                hideCompletionMessage();
                evaluatedCards = [];
                revisedCountSpan.text(++revisedCount);
                // Assurez-vous que la carte affichée est toujours un recto
                card.removeClass('flipped');
            }
        }
    }

    function updateCounters() {
        knowCountSpan.text(knowCount);
        reviewCountSpan.text(reviewCount);
    }

    function handleReviewButtonClick() {
        if (!evaluatedCards.includes(currentCardIndex)) {
            reviewCount++;
            evaluatedCards.push(currentCardIndex);
            buttonClicked = true; // Marquer que le bouton a été cliqué
            showCard();
            updateCounters();
        }
    }

    function handleKnowButtonClick() {
        if (!evaluatedCards.includes(currentCardIndex)) {
            knowCount++;
            evaluatedCards.push(currentCardIndex);
            buttonClicked = true; // Marquer que le bouton a été cliqué
            showCard();
            updateCounters();
        }
    }

    function resetButtonClick() {
        currentCardIndex = 0;
        shuffleArray(concepts);
        resetCounts();
        revisedCount = 0;
        revisedCountSpan.text(revisedCount);
        buttonClicked = false; // Réinitialiser la variable
    
        // Mise à jour de la carte après la réinitialisation
        updateCard();
        hideCompletionMessage();
        card.removeClass('flipped');
        evaluatedCards = [];
    }
    

    card.on('click', function () {
        card.toggleClass('flipped');
    });

    knowBtn.on('click', handleKnowButtonClick);
    nextBtn.on('click', showCard);
    reviewBtn.on('click', handleReviewButtonClick);
    resetBtn.on('click', resetButtonClick);

    // Initial setup
    shuffleArray(concepts);
    updateCard();
    resetCounts();
});
