function createConfetti() {
    const duration = 10 * 1000; // durée de l'explosion en millisecondes (10 secondes ici)
    const { clientWidth, clientHeight } = document.documentElement;

    const confettiSettings = { target: 'confetti-canvas', clock: duration };

    // Utilisez 'confetti.create' au lieu de 'new confetti.ConfettiGenerator'
    const confetti = confetti.create(confettiSettings);
    confetti.render();

    setTimeout(() => {
        confetti.clear();
        console.log('Confetti cleared.'); // Ajout d'un log pour débogage
    }, duration);
}
