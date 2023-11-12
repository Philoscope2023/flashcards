function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

$(document).ready(function () {
    const concepts = [
        { concept: 'Absolu', definition: 'Est absolu ce qui est entièrement séparé des autres choses. Une chose est absolue si sa valeur ou son existence est strictement indépendante de toute condition particulière : elle porte en elle-même sa signification, sa valeur, sa raison d’être.' },
        { concept: 'Relatif', definition: 'Est relatif ce qui ne peut être conçu qu’en relation avec une autre chose, qui détermine son sens, sa valeur ou sa raison d’être. Une chose est donc relative si, pour la comprendre, nous devons nécessairement la ramener à des conditions particulières.' },
        { concept: 'Abstrait', definition: 'Est abstrait ce qui appartient au domaine de la pensée (idées, concepts), ou ce qui caractérise ce qui est séparé, par la pensée, d’une chose concrète.' },
        { concept: 'Concret', definition: 'Est concret ce qui appartient au domaine du monde sensible et matériel, ce dont on peut faire l’expérience.' },
        { concept: 'En acte', definition: 'Une chose est en acte (actuelle) si elle est pleinement réalisée, complètement pourvue de ses caractéristiques et de ses pouvoirs (elle concrètement là). Une chose en acte existe actuellement.' },
        { concept: 'En puissance', definition: 'La puissance est la capacité à produire des effets ou à acquérir des qualités. Une chose est en puissance si elle n’existe que sur le mode de la potentialité, de la possibilité. Une propriété en puissance existe virtuellement.' },
        { concept: 'Analyse', definition: '' },
        { concept: 'Synthèse', definition: '' },
        { concept: 'Concept', definition: 'Représentation mentale (abstraite) et générale d’un objet, ou de plusieurs objets réunis en raison de leur caractère commun. Un concept est le produit de l’entendement.' },
        { concept: 'Image', definition: 'Représentation sensible (visuelle) d’un objet ou d’un concept. Une image peut permettre de représenter dans le concret un concept abstrait. Une image est le produit de l’imagination.' },
        { concept: 'Métaphore', definition: 'Figure de style qui consiste en une comparaison implicite ou sous-entendue. Elle permet de désigner une chose par une autre qui lui ressemble (y compris un concept abstrait par une image concrète). Les analogies sont des métaphores.' },
        { concept: 'Contingent', definition: 'Est contingent ce qui peut ne pas exister, ou être différent. Un événement est contingent quand il est déterminé par des circonstances particulières. C’est ce dont le contraire est possible.' },
        { concept: 'Nécessaire', definition: 'Est nécessaire ce qui ne peut pas ne pas exister, ou être différent. Un événement est nécessaire quand il est déterminé par une série de causes et d’effets. C’est ce dont le contraire est impossible.' },
        { concept: 'Croire', definition: 'Croire consiste à tenir pour vraie une proposition mais ne pas (encore) être capable de la démontrer / prouver. La croyance est incertaine / douteuse. Elle peut être fausse.' },
        { concept: 'Savoir', definition: 'Savoir consiste à tenir pour vraie une proposition (adhérer à une idée) et être capable de la démontrer / prouver. Le savoir est certain / indubitable. C’est une connaissance vraie.' },
        { concept: 'Essentiel', definition: 'Est essentiel ce qui relève de l’essence, c’est-à-dire de la nature, ou encore de la définition d’une chose.On parle de propriété essentielle au sujet d’une propriété qui, si on l’enlève, fait disparaître le sujet dont elle est la propriété. Ce sont des propriétés indispensables.' },
        { concept: 'Accidentel', definition: 'Est accidentel tout ce qui n’appartient à pas à l’essence d’une chose ; ce qui peut être ou ne pas être sans que cela ne change le sujet. Ce ne sont pas des propriétés indispensables.' },
        { concept: 'Exemple', definition: '' },
        { concept: 'Preuve', definition: '' },
        { concept: 'Expliquer', definition: '' },
        { concept: 'Comprendre', definition: '' },
        { concept: 'En fait', definition: '' },
        { concept: 'En droit', definition: '' },
        { concept: 'Formel', definition: '' },
        { concept: 'Matériel', definition: '' },
        { concept: 'Genre', definition: 'Classe d’objets possédant des caractéristiques communes. Le genre est subdivisé en espèces.' },
        { concept: 'Espèce', definition: 'Une espèce est un sous-groupe / une subdivision du genre. L’espèce est subdivisée en individus.' },
        { concept: 'Individu', definition: 'Un être concret et singulier, indivisible (Individuum en latin) réalité fondamentale. Les individus disposent de caractéristiques propres qui permettent de les distinguer les uns des autres + des caractéristiques communes qui en font les membres d’une même espèce.' },
        { concept: 'Hypothèse', definition: '' },
        { concept: 'Conséquence', definition: '' },
        { concept: 'Conclusion', definition: '' },
        { concept: 'Idéal', definition: 'Est idéal ce qui n’existe qu’à titre d’idée dans l’esprit. C’est aussi ce qui est idéal ce qui est parfait, ce qui doit être ou ce qui est souhaitable, ce qu’on cherche à réaliser. Un but à atteindre, un guide ou un modèle auquel se conformer.' },
        { concept: 'Réel', definition: 'Est réel ce qui existe effectivement, de manière autonome, indépendamment de toute construction ou représentation mentale. Le réel s’oppose à l’idéel et à l’apparence.' },
        { concept: 'Identité', definition: '' },
        { concept: 'Egalité', definition: '' },
        { concept: 'Différence', definition: '' },
        { concept: 'Impossible', definition: '' },
        { concept: 'Possible', definition: '' },
        { concept: 'Intuitif', definition: 'Est intuitif ce qui relève de l’intuition, c’est-à-dire de la faculté de se représenter immédiatement et sans aucune médiation un contenu de connaissance.' },
        { concept: 'Discursif', definition: 'Est discursif ce qui relève du discours ou du raisonnement, c’est-à-dire d’un processus intellectuel par lequel la raison doit passer pour construire des connaissances.' },
        { concept: 'Légal', definition: '' },
        { concept: 'Légitime', definition: '' },
        { concept: 'Médiat', definition: 'Est médiat ce qui est procuré indirectement, par un intermédiaire, comme les connaissances construites par la raison, par exemple à l’occasion d’un raisonnement mathématique.' },
        { concept: 'Immédiat', definition: 'Est immédiat ce qui se donne directement, sans intermédiaire. Les données ou connaissances reçues par l’intuition sont immédiates, spontanées.' },
        { concept: 'Objectif', definition: 'Est objectif ce qui existe factuellement, indépendamment de toute sensibilité et de tout sujet, de tout point de vue. C’est ce qui est relatif aux choses telles qu’elles sont en elles-mêmes, appréhendées de manière impartiale et neutre. Est objectif ce qui est relatif à l’objet à connaître.' },
        { concept: 'Subjectif', definition: 'Est subjectif ce qui existe relativement à un sujet, à un point de vue partial, ce qui dépend d’une sensibilité. Est subjectif ce qui est relatif au sujet connaissant.' },
        { concept: 'Intersubjectif', definition: 'Est intersubjectif ce qui témoigne du lien entre les sujets / les consciences, qui fait qu’elles partagent un monde commun. La conscience humaine n’est jamais isolée mais toujours en relation avec d’autres subjectivités.' },
        { concept: 'Obligation', definition: '' },
        { concept: 'Contrainte', definition: '' },
        { concept: 'Origine', definition: '' },
        { concept: 'Fondement', definition: '' },
        { concept: 'Persuader', definition: '' },
        { concept: 'Convaincre', definition: '' },
        { concept: 'Principe', definition: '' },
        { concept: 'Cause', definition: '' },
        { concept: 'Fin', definition: '' },
        { concept: 'Public', definition: '' },
        { concept: 'Privé', definition: '' },
        { concept: 'Ressemblance', definition: 'La ressemblance désigne une similitude d’aspect entre deux choses. Ces choses ont des points communs, en quoi elles se ressemblent, mais aussi des différences, sans quoi elles seraient identiques.' },
        { concept: 'Analogie', definition: 'L’analogie désigne une égalité de rapports entre quatre termes, selon le type mathématique A/B = C/D (ce que A est à B, C l’est à D). La comparaison porte non sur les termes (qui ne se ressemblent pas nécessairement) mais sur les relations qui les unissent.' },
        { concept: 'Théorie', definition: '' },
        { concept: 'Pratique', definition: '' },
        { concept: 'Transcendant', definition: 'Est transcendant le caractère de ce qui dépasse l’expérience ordinaire, ou se trouve extérieur au domaine de l’expérience ordinaire.' },
        { concept: 'Immanent', definition: 'Est immanent (du latin immanere, « résider dans ») ce qui se situe à l’intérieur du monde sensible, se confond avec lui.' },
        { concept: 'Universel', definition: 'Est universel ce qui vaut en tout temps et en tout lieu pour tout ce qui existe, sans exception possible, de façon absolue.' },
        { concept: 'Général', definition: 'Est général ce qui vaut pour tous les individus d’une même classe d’objets, relativement à leur genre. Est général ce qui vaut dans la majorité des cas, admettant la possibilité de quelques exceptions.' },
        { concept: 'Particulier', definition: 'Est particulier ce qui vaut pour quelques individus / sujets. Est particulier ce qui ne vaut que pour quelques cas au sein d’un même genre, sans que cela ne les concerne tous ou que cela n’en concerne qu’un.' },
        { concept: 'Singulier', definition: 'Est singulier ce qui vaut pour un seul et même cas. Ce qui vaut pour un seul individu / un seul sujet.' },
        { concept: 'Vrai', definition: 'Le vrai est la propriété d’un discours conforme à la réalité. Une proposition est vraie s’il y a adéquation entre le contenu de la proposition et le contenu du réel.' },
        { concept: 'Probable', definition: 'Une proposition est probable quand on estime disposer de bonnes raisons de croire en sa vérité, sans disposer de preuve. Une proposition probable est vraisemblable : elle a l’apparence du vrai, mais l’on n’a pas de certitude. Le probable relève du domaine de l’opinion et de la croyance.' },
        { concept: 'Certain', definition: 'La certitude est le sentiment / la conscience de connaître la vérité. On connaît les raisons de la vérité d’une proposition : on peut en faire la démonstration. Le certain relève du domaine du savoir.' }
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
        console.log('Creating confetti...');
    
        const duration = 10 * 1000;
    
        // Ajouter la classe hidden au canvas
        $('#confetti-canvas').addClass('hidden');
    
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
            console.log('Confetti cleared.');
    
            // Retirer la classe hidden du canvas
            $('#confetti-canvas').removeClass('hidden');
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
