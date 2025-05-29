// Assurez-vous que le navigateur prend en charge l'API Web Speech
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'fr-FR'; // Définir la langue sur le français
  recognition.continuous = false; // Écouter un seul résultat
  recognition.interimResults = false; // Finaliser uniquement les résultats

  console.log('SpeechRecognition est pris en charge');

  // Obtenir le bouton du microphone et l'overlay
  const micBtn = document.getElementById('micBtn');
  const micOverlay = document.getElementById('micOverlay');
  const micInstruction = document.getElementById('micInstruction'); // Obtenez l'élément de texte

  if (!micBtn || !micOverlay || !micInstruction) {
    console.error('Bouton microphone, overlay ou texte d\'instruction introuvable');
  } else {
    console.log('Bouton microphone, overlay et texte d\'instruction trouvés');

    // Liste des phrases à afficher
    const phrases = ["Mets Avengers", "Mets Vaiana", "Mets Vice-Versa 2", "Mets BeetleJuice", "Mets Bambi", "Mets Mario", "Mets Agatha All Along Episode 1", "Mets Agatha All Along Episode 2", "Mets Cars"];
    let currentPhraseIndex = 0;

    // Fonction pour changer le texte d'instruction toutes les 5 secondes
    setInterval(() => {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Boucle à travers les phrases
      micInstruction.textContent = `Dites "${phrases[currentPhraseIndex]}"`;
    }, 5000); // Change toutes les 5 secondes

    // Obtenir l'élément audio pour jouer le MP3
    const confirmationAudio = document.getElementById('confirmationAudio');

    // Écouteur d'événements pour le clic sur le bouton du microphone
    micBtn.addEventListener('click', () => {
      console.log('Bouton microphone cliqué');
      micOverlay.classList.add('active'); // Afficher l'overlay
      recognition.start();
    });

    // Fonction pour gérer le résultat de la reconnaissance vocale
    recognition.addEventListener('result', (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      console.log('Vous avez dit: ', transcript);

      let pageUrl = "";
      let pageName = "";

      if (transcript.includes('mets mario')) {
        pageUrl = "https://filemoon.sx/e/lrrz1isibzv5/";
        pageName = "Mario";
      } else if (transcript.includes('mets avatar')) {
        pageUrl = "https://filemoon.sx/e/aawyfakj2g4s";
        pageName = "Avatar";
      } else if (transcript.includes('mets avengers')) {
        pageUrl = "https://filemoon.sx/e/qpib0nj9hsay/";
        pageName = "Avengers";
      } else if (transcript.includes('mets la planète des singes')) {
        pageUrl = "https://filemoon.sx/e/8v7dode0xpvj/";
        pageName = "La Planète des Singes";
      } else if (transcript.includes('mets beetlejuice')) {
        pageUrl = "https://filemoon.sx/e/9e5ot7q6d89k/";
        pageName = "Beetlejuice";
      } else if (transcript.includes('mets bambi')) {
        pageUrl = "https://filemoon.sx/e/4zlif3fpsm4k/";
        pageName = "Bambi";
      } else if (transcript.includes('mets agatha all along episode 1')) {
        pageUrl = "https://filemoon.sx/e/6z5ix3xt9gt7/";
        pageName = "Agatha All Along Episode 1";
      } else if (transcript.includes('mets agatha all along episode 2')) {
        pageUrl = "https://filemoon.sx/e/xerjgqf90njq/";
        pageName = "Agatha All Along Episode 2";
      } else if (transcript.includes('mets cars')) {
        pageUrl = "https://filemoon.sx/e/pkpfu96sgx37/";
        pageName = "Cars";
      } else if (transcript.includes('mets Shang-Shi')) {
        pageUrl = "https://filemoon.sx/e/l4entcd5xgwb/";
        pageName = "Shang-Shi";
      } else if (transcript.includes('mets Vaiana')) {
        pageUrl = "https://filemoon.sx/e/iq7beol1tnxu/";
        pageName = "Vaiana";
      } else if (transcript.includes('mets Vice-Versa 2')) {
        pageUrl = "https://filemoon.sx/e/3u5mvceelgsf/";
        pageName = "Vice-Versa 2";
      } else {
        console.log('Aucune commande correspondante trouvée');
        alert('Commande non reconnue. Veuillez réessayer.');
        micOverlay.classList.remove('active');
        return;
      }

      // Avant de rediriger, jouer la voix préenregistrée (fichier MP3)
      confirmationAudio.play();

      // Lorsque l'audio est terminé, rediriger vers la page
      confirmationAudio.onended = function() {
        console.log(`Redirection vers la page ${pageName}`);
        window.location.href = pageUrl;
        autoPlayVideo();
      };

      // Masquer l'overlay après traitement du résultat
      micOverlay.classList.remove('active');
    });

    // Gestion des erreurs
    recognition.addEventListener('error', (event) => {
      console.error('Erreur de reconnaissance vocale: ', event.error);
      alert('Erreur lors de la reconnaissance vocale. Veuillez réessayer.');

      // Masquer l'overlay en cas d'erreur
      micOverlay.classList.remove('active');
    });

    // Fin de la reconnaissance vocale (par exemple, si l'utilisateur arrête de parler)
    recognition.addEventListener('end', () => {
      micOverlay.classList.remove('active');
    });
  }
} else {
  alert("La reconnaissance vocale n'est pas prise en charge par ce navigateur.");
}

// Fonction pour essayer de lire la vidéo automatiquement
function autoPlayVideo() {
  window.onload = function() {
    // Essayer de localiser et de simuler un clic sur le bouton de lecture après la redirection
    const playButton = document.querySelector('button'); // Modifier le sélecteur si nécessaire
    if (playButton) {
      playButton.click(); // Simuler un clic sur le bouton de lecture
    } else {
      console.error('Bouton de lecture introuvable');
    }
  };
}
