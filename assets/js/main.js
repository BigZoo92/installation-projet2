const mots = ["Médias", "technologies", "numériques", "nouvelles", "formes", "expression", "artistique", "esthétique", "expérience", "anciens", "mouvement", "idées", "sentiments", "spectateurs", "interagir", "œuvres", "d'art", "possibilités", "outils", "exploration", "peinture", "dessin", "photographie", "sculpture", "vidéo", "performance", "musique", "danse", "théâtre", "livres", "poésie", "cinéma", "jeux", "matériel", "mélanges", "mediums", "interdisciplinaire", "technologie", "mélanges", "médiums", "interdisciplinaire", "sensoriels", "émotions", "créativité", "innovation", "imagination", "modernité", "interaction", "virtuel", "réalité", "mixte", "narratif", "collaboration", "mondialisation", "évolution", "exploration", "plasticité", "mémoire", "analogique", "digital", "réflexion", "critique", "réinvention", "extraordinaire", "pratiques", "culturelles", "développement", "exploration", "savoir", "réflexion", "recherche"]
let compteur = 0;
const part1 = document.querySelector(".wordPart1");
function popWord() {
  mots.forEach(element => {
    const spanWord = document.createElement("span")
    let wordContent = document.createTextNode(element);
    spanWord.appendChild(wordContent)
    part1.appendChild(spanWord)
  });
}
document.body.onload = popWord;

setTimeout(() => {
    document.querySelector('button').style.opacity = 1
    document.querySelector('button').style.pointerEvents = "all"  
}, 2000);

function suivant1() {
    document.querySelector('#part1').style.display = "none"
    document.querySelector('.wordPart1').style.display = "flex"
    document.querySelector('button').style.opacity = 0
    document.querySelector('button').style.pointerEvents = "none"
}
function suivant2() {
    document.querySelector('.wordPart1').style.display = "none"
    document.querySelector('#part2').style.display = "flex"
    document.querySelector('button').style.opacity = 0
    document.querySelector('button').style.pointerEvents = "none"
}

function suivant3() {
    document.querySelector('#part2').style.display = "none"
    document.querySelector('#part3').style.display = "flex"
    document.querySelector('button').style.opacity = 0
    document.querySelector('button').style.pointerEvents = "none"
}

function suivant4() {
    document.querySelector('#part3').style.display = "none"
    document.querySelector('#part4').style.display = "flex"
    document.querySelector('button').style.opacity = 0
    document.querySelector('button').style.pointerEvents = "none"
}

function suivant5() {
    document.querySelector('#part4').style.display = "none"
    document.querySelector('#part5').style.display = "flex"
    document.querySelector('button').style.opacity = 0
    document.querySelector('button').style.pointerEvents = "none"
    setTimeout(() => {
        document.querySelector('video').play();
    }, 2000);
}

