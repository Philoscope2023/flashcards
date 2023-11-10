$(document).ready(function () {
    const concepts = [
        { concept: 'intuitif', definition: 'discursif' },
        { concept: 'médiat', definition: 'immédiat' },
        { concept: 'nécessaire', definition: 'contingent' }
    ];

    let currentCardIndex = 0;
    let knowCount = 0;
    let reviewCount = 0;

    const card = $('#card');
    const knowBtn = $('#knowBtn');
    const nextBtn = $('#nextBtn');
    const reviewBtn = $('#reviewBtn');
    const knowCountSpan = $('#knowCount');
    const reviewCountSpan = $('#reviewCount');
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
    }

    function hideCompletionMessage() {
        completionMessage.hide();
    }

    function showNextCard() {
        if (currentCardIndex < concepts.length - 1) {
            currentCardIndex++;
            updateCard();
            hideCompletionMessage();
        } else {
            showCompletionMessage();
        }
    }

    function updateCounters() {
        knowCountSpan.text(knowCount);
        reviewCountSpan.text(reviewCount);
    }

    function knowButtonClick() {
        knowCount++;
        updateCounters();
        showNextCard();
    }

    function reviewButtonClick() {
        reviewCount++;
        updateCounters();
        showNextCard();
    }

    function resetButtonClick() {
        currentCardIndex = 0;
        resetCounts();
        updateCard();
        hideCompletionMessage();
    }

    card.on('click', function () {
        card.toggleClass('flipped');
    });

    knowBtn.on('click', knowButtonClick);
    nextBtn.on('click', showNextCard);
    reviewBtn.on('click', reviewButtonClick);
    resetBtn.on('click', resetButtonClick);

    // Initial setup
    updateCard();
    resetCounts();
});
