document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.slick-prev');
    const nextButton = document.querySelector('.slick-next');
    const sliderTrack = document.querySelector('.slick-track');
    const slides = document.querySelectorAll('.slick-slide');
    let currentSlide = 0;
    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;

    // Fonction pour mettre à jour l'état du slider
    function updateSliderPosition() {
        sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        updateButtons();
    }

    // Mettre à jour l'état des boutons (actif ou désactivé)
    function updateButtons() {
        prevButton.classList.toggle('slick-disabled', currentSlide === 0);
        nextButton.classList.toggle('slick-disabled', currentSlide >= slideCount - 1);
    }

    // Clic sur le bouton "Précédente"
    prevButton.addEventListener('click', function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSliderPosition();
        }
    });

    // Clic sur le bouton "Suivante"
    nextButton.addEventListener('click', function() {
        if (currentSlide < slideCount - 1) {
            currentSlide++;
            updateSliderPosition();
        }
    });

    // Initialisation de l'état des boutons
    updateButtons();
});

// Sélectionner les éléments de la cloche et du menu
const notificationBell = document.querySelector('.notification-bell');
const notificationMenu = document.querySelector('.notification-menu');

// Fonction pour montrer le menu des notifications
function showNotificationMenu() {
    notificationMenu.style.display = 'block'; // Afficher le menu
}

// Fonction pour cacher le menu des notifications
function hideNotificationMenu() {
    notificationMenu.style.display = 'none'; // Cacher le menu
}

// Lorsque le curseur survole la cloche, afficher le menu
notificationBell.addEventListener('mouseenter', showNotificationMenu);

// Lorsque le curseur quitte la cloche, cacher le menu
notificationBell.addEventListener('mouseleave', function() {
    setTimeout(function() {
        // Vérifier si la souris est toujours sur le menu
        if (!notificationMenu.matches(':hover')) {
            hideNotificationMenu();
        }
    }, 100);
});

// Lorsque le curseur quitte le menu, cacher le menu
notificationMenu.addEventListener('mouseleave', hideNotificationMenu);

// Assurer que le menu reste ouvert si le curseur est dessus
notificationMenu.addEventListener('mouseenter', showNotificationMenu);

