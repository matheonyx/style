const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');

const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const muteIcon = document.getElementById('muteIcon');
const unmuteIcon = document.getElementById('unmuteIcon');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Pour s'assurer que, dès que la vidéo charge ses métadonnées, elle démarre à 6 secondes
video.addEventListener('loadedmetadata', function() {
  if (video.currentTime < 6) {
    video.currentTime = 6;
  }
});

// Assurez-vous que le code est exécuté lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");
    const muteCheckbox = document.getElementById("checkboxInput");
    
    // Play/Pause Functionality
    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playIcon.style.display = "none";  // Cache l'icône de lecture
            pauseIcon.style.display = "inline";  // Affiche l'icône de pause
        } else {
            video.pause();
            playIcon.style.display = "inline";  // Affiche l'icône de lecture
            pauseIcon.style.display = "none";  // Cache l'icône de pause
        }
    });

    // Mute/Unmute Functionality
    muteCheckbox.addEventListener("change", function() {
        video.muted = muteCheckbox.checked;
    });
    
    // Initial state setup (au cas où la vidéo serait déjà en pause ou en mute au chargement)
    if (video.paused) {
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    } else {
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    }

    // Si la vidéo est déjà en mute au chargement
    muteCheckbox.checked = video.muted;
});

document.getElementById("everythingBtn").addEventListener("click", function(event) {
  event.preventDefault();
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("scroll", function() {
  var everythingBtn = document.getElementById("everythingBtn");
  var videobox = document.getElementById("videobox");
  
  if (window.scrollY >= videobox.offsetHeight) {
    everythingBtn.classList.add("fixed");
  } else {
    everythingBtn.classList.remove("fixed");
  }
});

// Nouveaux éléments vidéo et logo
const videos = [
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/%E3%80%904K%2060FPS%20HDR%E3%80%91Trailer%20%EF%BD%9C%20Moana%202.mp4?v=1733514184057",
    logo: "https://lumiere-a.akamaihd.net/v1/images/image_2fe2f467.png",
    link: "https://matheonyx.github.io/Nesdy/vaiana2"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/Minions%20The%20Rise%20of%20Gru%20%20Official%20Trailer%20%202021.mp4?v=1740512944636",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Minions_-_The_Rise_of_Gru_logo.svg",
    link: "https://matheonyx.github.io/Nesdy/Minions%20Rise%20of%20Gru.html"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/Mufasa%20The%20Lion%20King%20%5B4K%2060FPS%5D.mp4?v=1739909058618",
    logo: "https://lumiere-a.akamaihd.net/v1/images/pp_mufasathelionking_logo_791_92c8ead1.png",
    link: "https://magnetic-lowly-sodalite.glitch.me/mufasa.html"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/Dune%20Part%20Two%20%20%20Paul%20Atreides%20Rides%20A%20Sandworm%20%20ClipZone%20High%20Octane%20Hits.mp4?v=1729579726280",
    logo: "https://image.tmdb.org/t/p/original/yJtgOc8lcP2Iugn0o3e1F0ZEmur.png",
    link: "https://matheonyx.github.io/Nesdy/dune%202"
  },
  {
    src: "https://www.universalpictures.fr/tl_files/content/hero/kfp4_trailer.mp4",
    logo: "https://www.universalpictures.fr/tl_files/content/movies/kung_fu_panda_4/title.png",
    link: "https://magnetic-lowly-sodalite.glitch.me/Kung%20Fu%20Panda%204.html"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/%5B4K60FPS%5D%20Star%20Wars%20Episode%20IX%20-%20The%20Rise%20of%20Skywalker%20%202019.mp4?v=1740513443454",
    logo: "https://lumiere-a.akamaihd.net/v1/images/the-rise-of-skywalker-logo_3314d2cd.png?region=0,0,800,402",
    link: "https://matheonyx.github.io/Nesdy/star%20wars%20IX"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/Puss%20in%20Boots%20The%20Last%20Wish%20%20Trailer%20%231%20(4K%2060FPS)%202022.mp4?v=1740564264356",
    logo: "https://thumb.canalplus.pro/http/unsafe/760x428/filters:quality(80)/canalplus-cdn.canal-plus.io/p1/unit/20843027/canal-ouah/TITLELOGO/myCANAL_Logo_Fiche_Programme_1920x1080",
    link: "https://magnetic-lowly-sodalite.glitch.me/puss%20in%20boots%202.html"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/Vice-Versa%202%20-%20Bande-annonce%20officielle%20%20Disney.mp4?v=1724172514368",
    logo: "https://lumiere-a.akamaihd.net/v1/images/image_d55b2730.png",
    link: "https://matheonyx.github.io/Nesdy/vice%20versa%202.html"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/%E3%80%904K%2060FPS%20HDR%E3%80%91New%20Trailer%20%EF%BD%9C%20Sonic%20The%20Hedgehog%203.mp4?v=1740516618385",
    logo: "https://i.redd.it/ovtv06o2i2u81.png",
    link: "https://magnetic-lowly-sodalite.glitch.me/sonic3.html"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/MORTAL%20KOMBAT%20Trailer%20%231%20(4K%20ULTRA%20HD%2060FPS)%20NEW%202021.mp4?v=1733654744535",
    logo: "https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcHOJX5Tw6C818wzyPJLP5Au_b2bIPFRiO2dIkyuqu3CnQHARhIDJVrc-qwVpba5exsqni_3E_24YnfjUlNcHhNV6BELnblCsh04x4Fab--B.png?r=703",
    link: "https://matheonyx.github.io/Nesdy/venom3"
  },
  {
    src: "https://cdn.glitch.me/aba06776-3d00-4213-9643-021321905a51/TRON%20Ares%20%20Official%20Trailer%20%231%20(4K%2060FPS)%202025.mp4?v=1746106728097",
    logo: "https://lumiere-a.akamaihd.net/v1/images/pp_disneymovies_tronares_logo_9985bef0.png",
    link: "https://magnetic-lowly-sodalite.glitch.me/ce%20noel%20la.html"
  },
  {
    src: "https://cdn.glitch.me/dec50b52-1fc2-417a-80a4-dfe25959cc90/LILO%20%26%20STITCH%202025%20-%20Trailer%204K%20Ultra%20HD%2060FPS.mp4?v=1742120580444",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Lilo_%26_Stitch_2025_film_logo.png",
    link: "https://magnetic-lowly-sodalite.glitch.me/ce%20noel%20la.html"
  },
  {
    src: "https://cdn.glitch.me/b5e38bca-811c-495c-aa28-c13540ae7e7b/How%20to%20Train%20Your%20Dragon%20(2025)%20Trailer%20%20-%204K%20HDR%20%20%F0%9F%8E%9E%20Tekno3D%20Labs%20Software.mp4?v=1750576288575",
    logo: "https://www.universalpictures.fr/tl_files/content/movies/httyd_liveaction/title.png",
    link: "https://magnetic-lowly-sodalite.glitch.me/ce%20noel%20la.html"
  },
  {
    src: "https://cdn.glitch.me/aba06776-3d00-4213-9643-021321905a51/Marvel%20Studios%20Thunderbolts_%20%20Final%20Trailer%20%204K%20HDR%20%20%F0%9F%8E%9E%20%20Video%20Enhance%20Studio%20AI%201.6.8.mp4?v=1747845624826",
    logo: "https://cdn.glitch.global/aba06776-3d00-4213-9643-021321905a51/marvels-thunderbolts-2024-movies-marvel-cinematic-universe-3840x1080-8457-removebg-preview%20(2).png?v=1747846345527",
    link: "https://matheonyx.github.io/Nesdy/thunderbolt.html"
  },
];

// --- Fonction de mélange (Fisher-Yates) ---
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Mélanger le tableau des vidéos pour un ordre aléatoire
shuffle(videos);

// Initialiser currentVideoIndex de manière aléatoire
let currentVideoIndex = Math.floor(Math.random() * videos.length);

const logo = document.getElementById('logodm4');

// Arrow navigation functionality
document.getElementById("leftArrow").addEventListener("click", function() {
  currentVideoIndex = (currentVideoIndex === 0) ? videos.length - 1 : currentVideoIndex - 1;
  changeVideo();
});

document.getElementById("rightArrow").addEventListener("click", function() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  changeVideo();
});

function changeVideo() {
  video.src = videos[currentVideoIndex].src;
  logo.src = videos[currentVideoIndex].logo;
  document.getElementById("logoLink").href = videos[currentVideoIndex].link; // Mettez à jour le href du lien
  
  // Ajuster la taille du logo
  logo.style.width = '150px';  // ou toute autre taille appropriée
  logo.style.height = 'auto';
  logo.style.objectFit = 'contain';  // Maintient la qualité et proportionnalité
  
  // S'assurer que la vidéo démarre à 6 secondes dès que ses métadonnées sont chargées
  video.addEventListener('loadedmetadata', function() {
    video.currentTime = 6;
    video.play();
  }, { once: true });

  // Reset play/pause icons
  playIcon.style.display = 'none';
  pauseIcon.style.display = 'block';
}

document.getElementById("avatarIcon").addEventListener("click", function() {
  var dropdownMenu = document.getElementById("dropdownAvatarMenu");
  dropdownMenu.classList.toggle("hidden");
});

window.addEventListener("click", function(event) {
  if (!event.target.closest('#avatarContainer')) {
    document.getElementById("dropdownAvatarMenu").classList.add("hidden");
  }
});

// Sélectionnez le bouton "+" et le menu déroulant
const plusBtn = document.getElementById("plusBtn");
const plusDropdownMenu = document.getElementById("plusDropdownMenu");
const plusContainer = document.getElementById("plusContainer");

// Affichez le menu déroulant au survol du bouton "+"
plusBtn.addEventListener("mouseover", function() {
  plusDropdownMenu.style.display = "block";
});

// Masquez le menu lorsque le curseur quitte le conteneur du bouton "+"
plusContainer.addEventListener("mouseleave", function() {
  plusDropdownMenu.style.display = "none";
});

const profileLink = document.querySelector('.userSelector__profileLink');
const dropdownMenu = document.querySelector('.dropdownMenu');

profileLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default anchor click behavior
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
  if (!profileLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("searchBtn");
    const champRecherche = document.getElementById("champRecherche");
    const fondNoir = document.getElementById("fondNoir");
    const resultatRecherche = document.getElementById("resultatRecherche");

    searchBtn.addEventListener("click", function() {
        champRecherche.classList.toggle("show");
        champRecherche.focus();
    });

    champRecherche.addEventListener("input", function() {
        const query = champRecherche.value.toLowerCase();
        resultatRecherche.innerHTML = "";
        
        if (query.startsWith("s")) {
            const img = document.createElement("img");
            img.src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=1920&aspectRatio=1.78&format=png";
            img.alt = "Spider-Man";
            img.className = "resultat-item";
            resultatRecherche.appendChild(img);
        }
    });

    fondNoir.addEventListener("click", function() {
        champRecherche.classList.remove("show");
    });
});

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'fr-FR'; // Set language to French
  recognition.continuous = false; // Listen for a single result
  recognition.interimResults = false; // Only finalize results

  console.log('SpeechRecognition is supported');

  // Get the microphone button and indicator
  const micBtn = document.getElementById('micBtn');
  const micIndicator = document.getElementById('micIndicator');
  
  if (!micBtn || !micIndicator) {
    console.error('Microphone button or indicator not found');
  } else {
    console.log('Microphone button and indicator found');

    // Event listener for the microphone button click
    micBtn.addEventListener('click', () => {
      console.log('Microphone button clicked');
      micIndicator.classList.add('active'); // Show the indicator
      recognition.start();
    });

    // Function to handle the result of speech recognition
    recognition.addEventListener('result', (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      console.log('You said: ', transcript);

      if (transcript.includes('mets mario')) {
        console.log('Redirecting to Mario page');
        window.location.href = "https://workable-grand-dosa.glitch.me/The%20super%20mario%20bros.html";
      } else {
        alert("Commande non reconnue.");
      }
      
      // Hide the indicator after processing the result
      micIndicator.classList.remove('active');
    });

    // Error handling
    recognition.addEventListener('error', (event) => {
      console.error('Speech recognition error: ', event.error);
      alert('Erreur lors de la reconnaissance vocale. Veuillez réessayer.');

      // Hide the indicator on error
      micIndicator.classList.remove('active');
    });

    // End of speech recognition (e.g., user stops talking)
    recognition.addEventListener('end', () => {
      micIndicator.classList.remove('active');
    });
  }
} else {
  alert("La reconnaissance vocale n'est pas prise en charge par ce navigateur.");
}

document.getElementById('champRecherche').addEventListener('input', function () {
  const searchValue = this.value.trim();
  const fondNoir = document.getElementById('fondNoir');
  
  if (searchValue.length > 0) {
    fondNoir.style.display = 'block'; // Show the black overlay when typing
  } else {
    fondNoir.style.display = 'none'; // Hide the black overlay when input is empty
  }
});

document.addEventListener('click', function (event) {
  const searchInput = document.getElementById('champRecherche');
  const fondNoir = document.getElementById('fondNoir');
  
  if (!searchInput.contains(event.target) && !document.getElementById('resultatRecherche').contains(event.target)) {
    fondNoir.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');
    const halloweenLogo = document.getElementById('halloween-logo');
    const noelLogo = document.getElementById('noel-logo');
    const closeButton = document.querySelector('.close-button');
    const noelMusic = document.getElementById('noel-music'); // Récupérer l'audio

    if (overlay && mainContent && halloweenLogo && noelLogo && closeButton && noelMusic) {
        function hideOverlay() {
            overlay.style.display = 'none';
            mainContent.style.display = 'block';
        }

        halloweenLogo.addEventListener('click', function () {
            document.body.classList.add('halloween-theme');
            hideOverlay();
        });

        noelLogo.addEventListener('click', function () {
            document.body.classList.add('noel-theme');
            hideOverlay();
        });

        closeButton.addEventListener('click', function () {
            hideOverlay();
        });

        noelLogo.addEventListener('mouseover', function () {
            noelMusic.play();
        });

        noelLogo.addEventListener('mouseleave', function () {
            noelMusic.pause();
            noelMusic.currentTime = 0;
        });
    } else {
        console.error("Les éléments nécessaires pour l'overlay ne sont pas trouvés dans le DOM.");
    }
});
