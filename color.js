 
document.addEventListener('DOMContentLoaded', function() {
    // Tableau d'objets contenant les paires de couleurs
    const colorPairs = [
        { background: 'red', text: 'white' },
        { background: 'blue', text: 'yellow' },
        { background: 'green', text: 'black' },
        { background: 'yellow', text: 'purple' },
        { background: 'purple', text: 'orange' },
        { background: 'white', text: 'blue' },
        { background: 'orange', text: 'green' }
    ];

    // Index de la couleur actuelle pour le fond
    let index = 0;

    // Fonction pour changer les couleurs
    function general() {
        // Sélectionner toutes les sections avec la classe 'b'
        const sections = document.querySelectorAll('.b');

        sections.forEach(section => {
            // Changer la couleur de fond en suivant l'ordre du tableau
            section.style.backgroundColor = colorPairs[index].background;

            // Sélectionner tous les paragraphes dans chaque section
            const paragraphs = section.querySelectorAll('p');
            
            // Changer la couleur de chaque paragraphe
            paragraphs.forEach(paragraph => {
                paragraph.style.color = colorPairs[index].text;
            });
        });

        // Incrémenter l'index de la couleur pour le fond
        index++;

        // Réinitialiser l'index si on atteint la fin du tableau
        if (index >= colorPairs.length) {
            index = 0;
        }
    }

    // Appeler la fonction general toutes les 2 secondes
    setInterval(general, 2000);
});



// JavaScript : Explication du code

//     colorPairs : Un tableau d'objets où chaque objet contient une paire de couleurs pour le fond et le texte.
//     index : Variable pour suivre la couleur actuelle dans le tableau.
//     general() : Fonction qui change les couleurs de fond et de texte des sections.
//         Les sections sont sélectionnées avec document.querySelectorAll('.b').
//         La couleur de fond des sections est définie à partir de colorPairs[index].background.
//         La couleur de texte des paragraphes est définie à partir de colorPairs[index].text.
//         L'index est incrémenté et réinitialisé si nécessaire.
//     setInterval(general, 2000) : Appelle la fonction general() toutes les 2 secondes pour mettre à jour les couleurs.




















// Explication du code   

// JavaScript :

//     Le tableau colors contient les couleurs possibles.
//     index est utilisé pour suivre la couleur actuelle du fond des sections.
//     Un gestionnaire d'événements est ajouté au bouton pour changer la couleur des textes et le fond des sections.
//     sections est une collection de toutes les sections avec la classe b.
//     Pour chaque section, la couleur de fond est appliquée en suivant l'ordre du tableau colors.
//     Les éléments <p> à l'intérieur de chaque section ont une couleur de texte appliquée de manière aléatoire.
//     index est incrémenté pour changer la couleur de fond à chaque clic, et est réinitialisé lorsqu'il atteint la fin du tableau.