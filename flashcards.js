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
        { concept: 'Analyse', definition: 'Une analyse est une opération de l’esprit qui consiste à décomposer un tout (un phénomène ou un concept) en ses différents éléments (causes ou principes) fondamentaux, de sorte à l’expliquer. Analyser, c’est isoler les différentes parties d’un tout : partir du complexe ou du composé pour en arriver au simple.' },
        { concept: 'Synthèse', definition: 'Une synthèse est une opération de l’esprit qui consiste à rassembler ou organiser des éléments séparés en un tout, de sorte à comprendre une chose (un phénomène ou un concept). Synthétiser, c’est aller du simple au complexe, former un tout cohérent à  partir d’éléments isolés.' },
        { concept: 'Concept', definition: 'Représentation mentale (abstraite) et générale d’un objet, ou de plusieurs objets réunis en raison de leur caractère commun. Un concept est le produit de l’entendement.' },
        { concept: 'Image', definition: 'Représentation sensible (visuelle) d’un objet ou d’un concept. Une image peut permettre de représenter dans le concret un concept abstrait. Une image est le produit de l’imagination.' },
        { concept: 'Métaphore', definition: 'Figure de style qui consiste en une comparaison implicite ou sous-entendue. Elle permet de désigner une chose par une autre qui lui ressemble (y compris un concept abstrait par une image concrète). Les analogies sont des métaphores.' },
        { concept: 'Contingent', definition: 'Est contingent ce qui peut ne pas exister, ou être différent. Un événement est contingent quand il est déterminé par des circonstances particulières. C’est ce dont le contraire est possible.' },
        { concept: 'Nécessaire', definition: 'Est nécessaire ce qui ne peut pas ne pas exister, ou être différent. Un événement est nécessaire quand il est déterminé par une série de causes et d’effets. C’est ce dont le contraire est impossible.' },
        { concept: 'Croire', definition: 'Croire consiste à tenir pour vraie une proposition mais ne pas (encore) être capable de la démontrer / prouver. La croyance est incertaine / douteuse. Elle peut être fausse.' },
        { concept: 'Savoir', definition: 'Savoir consiste à tenir pour vraie une proposition (adhérer à une idée) et être capable de la démontrer / prouver. Le savoir est certain / indubitable. C’est une connaissance vraie.' },
        { concept: 'Essentiel', definition: 'Est essentiel ce qui relève de l’essence, c’est-à-dire de la nature, ou encore de la définition d’une chose.On parle de propriété essentielle au sujet d’une propriété qui, si on l’enlève, fait disparaître le sujet dont elle est la propriété. Ce sont des propriétés indispensables.' },
        { concept: 'Accidentel', definition: 'Est accidentel tout ce qui n’appartient à pas à l’essence d’une chose ; ce qui peut être ou ne pas être sans que cela ne change le sujet. Ce ne sont pas des propriétés indispensables.' },
        { concept: 'Exemple', definition: 'Pédagogiquement, un exemple est un cas permettant d’illustrer ou de clarifier un concept ou une idée. Il ne vaut pas pour preuve, car on peut toujours présenter un contre-exemple. Moralement, un exemple est un objectif / un idéal à atteindre ou un modèle à suivre.' },
        { concept: 'Preuve', definition: 'Une preuve est un raisonnement formel ou un élément matériel établissant de manière certaine et universelle la validité d’une proposition.' },
        { concept: 'Expliquer', definition: 'Expliquer consiste à analyser, à clarifier et à rendre compte des relations qu’entretiennent un ensemble de phénomènes. Les sciences de la nature cherchent à déterminer les causes des phénomènes pour y parvenir. Elles répondent à la question du « comment ».' },
        { concept: 'Comprendre', definition: 'Comprendre consiste à déterminer le sens ou la signification d’un phénomène ou d’un ensemble de phénomènes. Les sciences humaines et sociales cherchent à rendre compte des raisons de nos actions. Elles répondent à la question du « pourquoi ».' },
        { concept: 'En fait', definition: 'Ce qui est en fait caractérise l’existence d’une chose particulière. Cela signifie « dans les faits », ce qui est effectif, qui constitue le réel.' },
        { concept: 'En droit', definition: 'Ce qui est en droit caractérise ce qui est légal ou légitime. Cela fait référence à une règle à suivre, à ce qui doit être, à un idéal à réaliser.' },
        { concept: 'Formel', definition: 'Est formel ce qui fait référence à la forme ou l’apparence d’une chose. La logique est composée de raisonnements et de vérités formelles : qui ne dépendent que des règles du raisonnement, et non du contenu qu’il exprime.' },
        { concept: 'Matériel', definition: 'Est matériel ce qui fait référence au contenu d’une chose. Une vérité matérielle caractérise l’adéquation entre le contenu d’un discours et le contenu du réel.' },
        { concept: 'Genre', definition: 'Un genre est une classe d’objets possédant des caractéristiques communes. Le genre est subdivisé en espèces.' },
        { concept: 'Espèce', definition: 'Une espèce est un sous-groupe / une subdivision du genre. L’espèce est subdivisée en individus.' },
        { concept: 'Individu', definition: 'Un individu est un être concret et singulier, indivisible, une réalité fondamentale. Les individus disposent de caractéristiques propres qui permettent de les distinguer les uns des autres + des caractéristiques communes qui en font les membres d’une même espèce.' },
        { concept: 'Hypothèse', definition: 'Une hypothèse est une proposition qu’on tient provisoirement pour vraie en attendant sa démonstration. Avant démonstration, une hypothèse appartient au domaine du probable et de la croyance (ce qui reste à démontrer).' },
        { concept: 'Conséquence', definition: 'Au sens physique, une conséquence est l’effet d’une cause ou d’une action. Au sens logique, une conséquence est une proposition qui découle nécessairement d’une proposition antérieure (une prémisse).' },
        { concept: 'Conclusion', definition: 'Une conclusion est la conséquence d’une prémisse, le dernier élément d’un raisonnement ou d’un discours. Une conclusion appartient au domaine du certain et du savoir (ce qui est démontré).' },
        { concept: 'Idéal', definition: 'Est idéal ce qui n’existe qu’à titre d’idée dans l’esprit. C’est aussi ce qui est idéal ce qui est parfait, ce qui doit être ou ce qui est souhaitable, ce qu’on cherche à réaliser. Un but à atteindre, un guide ou un modèle auquel se conformer.' },
        { concept: 'Réel', definition: 'Est réel ce qui existe effectivement, de manière autonome, indépendamment de toute construction ou représentation mentale. Le réel s’oppose à l’idéel et à l’apparence.' },
        { concept: 'Identité', definition: 'L’identité numérique désigne l’ensemble des caractéristiques qui distinguent  numériquement une chose d’une autre. L’identité qualitative désigne l’ensemble des caractéristiques que deux choses différentes peuvent avoir en commun. L’identité personnelle désigne le caractère de ce qui demeure inchangé à travers le temps et malgré les changements ; ce qu’il y a d’essentiel dans l’individu, par opposition à l’ensemble de ses caractéristiques accidentelles.' },
        { concept: 'Egalité', definition: 'Dans un 1er sens, l’égalité caractérise la relation qu’entretiennent deux ou plusieurs choses qui ne présentent pas de différence quantitative ou qualitative. Synonyme d’équivalent. Dans un 2nd sens, l’égalité désigne un idéal juridique et moral selon lequel le droit doit être le même pour tous, et la loi s’applique indistinctement à tous.' },
        { concept: 'Différence', definition: 'La différence est ce qui caractérise un rapport d’altérité entre plusieurs choses qui peuvent par ailleurs disposer de caractères communs.' },
        { concept: 'Impossible', definition: 'Est impossible ce qui n’est pas, et ne peut pas être ; ce dont les conditions d’existence ne sont pas réunies. Au sens logique, est impossible ce qui est absurde ou contradictoire. Au sens physique, est impossible ce qui contrevient aux lois de la nature.' },
        { concept: 'Possible', definition: 'Est possible ce qui n’est pas impossible, ce qui peut exister mais n’existe pas dans les faits, ce que rien n’empêche.' },
        { concept: 'Intuitif', definition: 'Est intuitif ce qui relève de l’intuition, c’est-à-dire de la faculté de se représenter immédiatement et sans aucune médiation un contenu de connaissance.' },
        { concept: 'Discursif', definition: 'Est discursif ce qui relève du discours ou du raisonnement, c’est-à-dire d’un processus intellectuel par lequel la raison doit passer pour construire des connaissances.' },
        { concept: 'Légal', definition: 'Est légal ce qui est conforme à la loi / à une norme du droit positif. Ce qui est légale n’est pas nécessairement légitime.' },
        { concept: 'Légitime', definition: 'Est légitime ce qui conforme à la morale / ce qui est juste du point de vue des valeurs éthiques. Ce qui est légitime n’est pas nécessairement légal.' },
        { concept: 'Médiat', definition: 'Est médiat ce qui est procuré indirectement, par un intermédiaire, comme les connaissances construites par la raison, par exemple à l’occasion d’un raisonnement mathématique.' },
        { concept: 'Immédiat', definition: 'Est immédiat ce qui se donne directement, sans intermédiaire. Les données ou connaissances reçues par l’intuition sont immédiates, spontanées.' },
        { concept: 'Objectif', definition: 'Est objectif ce qui existe factuellement, indépendamment de toute sensibilité et de tout sujet, de tout point de vue. C’est ce qui est relatif aux choses telles qu’elles sont en elles-mêmes, appréhendées de manière impartiale et neutre. Est objectif ce qui est relatif à l’objet à connaître.' },
        { concept: 'Subjectif', definition: 'Est subjectif ce qui existe relativement à un sujet, à un point de vue partial, ce qui dépend d’une sensibilité. Est subjectif ce qui est relatif au sujet connaissant.' },
        { concept: 'Intersubjectif', definition: 'Est intersubjectif ce qui témoigne du lien entre les sujets / les consciences, qui fait qu’elles partagent un monde commun. La conscience humaine n’est jamais isolée mais toujours en relation avec d’autres subjectivités.' },
        { concept: 'Obligation', definition: 'Une obligation est un lien moral par lequel une personne est tenue de faire quelque chose. Être obligé, c’est reconnaître son engagement à faire quelque chose et se contraindre soi-même à le réaliser. L’obligation suppose la liberté : notre volonté est autonome quand elle s’oblige elle-même.' },
        { concept: 'Contrainte', definition: 'Une contrainte est une violence physique ou morale imposée à un individu pour le forcer à faire quelque chose. Une contrainte est une privation de la liberté : notre volonté est hétéronome quand celle d’autrui s’impose à nous par la contrainte.' },
        { concept: 'Origine', definition: 'L’origine désigne le point de départ chronologique d’un processus.' },
        { concept: 'Fondement', definition: 'Un fondement désigne le point de départ logique d’un processus. C’est ce qui rend compte de l’existence d’une chose ou justifie sa raison d’être.' },
        { concept: 'Persuader', definition: 'Persuader consiste à forcer l’adhésion à une idée en faisant appel aux émotions plutôt qu’au raisonnement.' },
        { concept: 'Convaincre', definition: 'Convaincre consiste à entraîner l’adhésion à une idée en mobilisant des arguments rationnels ou en présentant des preuves objectives de sa validité.' },
        { concept: 'Principe', definition: 'Au sens moral, un principe est un jugement normatif relatif à ce qui est bien ou mal, à ce qu’il faut faire ou ne pas faire. La pratique se règle en fonction d’un ensemble de principes, c’est-à-dire de règles, d’action. Au sens logique, un principe est une proposition première, en elle-même indémontrable, mais qui se trouve au fondement d’un raisonnement, et qui rend la démonstration possible.' },
        { concept: 'Cause', definition: 'Une cause est ce qui produit un effet et l’effet est la conséquence d’une cause. Une cause est l’événement logiquement ou chronologiquement antérieur à un autre (l’effet), en lequel il trouve sa raison d’être ou sa justification.' },
        { concept: 'Fin', definition: 'Chronologiquement, une fin ce qui termine un processus. Logiquement ou moralement, une fin est ce qui guide un processus : ce en vertu de quoi il se déploie. « Fin », en ce sens, est un synonyme de « but » ou « idéal » de l’action.' },
        { concept: 'Public', definition: 'Est public ce qui appartient à tous, ce qui concerne la collectivité ou ce qui dépend de l’Etat.' },
        { concept: 'Privé', definition: 'Est privé ce qui n’appartient qu’à un seul, ce qui ne concerne que soi ou un petit groupe d’individus.' },
        { concept: 'Ressemblance', definition: 'La ressemblance désigne une similitude d’aspect entre deux choses. Ces choses ont des points communs, en quoi elles se ressemblent, mais aussi des différences, sans quoi elles seraient identiques.' },
        { concept: 'Analogie', definition: 'L’analogie désigne une égalité de rapports entre quatre termes, selon le type mathématique A/B = C/D (ce que A est à B, C l’est à D). La comparaison porte non sur les termes (qui ne se ressemblent pas nécessairement) mais sur les relations qui les unissent.' },
        { concept: 'Théorie', definition: 'Une théorie est un ensemble organisé d’hypothèses articulées en vue d’expliquer ou de comprendre un ensemble de phénomènes, indépendamment de toute considération pratique. « En théorie » signifie « en droit ». Quelque chose peut être vrai en théorie sans qu’on puisse le constater dans les faits.' },
        { concept: 'Pratique', definition: 'Une pratique est l’articulation d’un ensemble d’actions réalisées en conformité avec une théorie, et donc avec méthode. « En pratique » signifie « en fait ». Quelque chose est vrai en pratique quand elle est effective, quand elle existe réellement.' },
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
