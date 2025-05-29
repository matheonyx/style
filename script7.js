const slider = document.querySelector('.slick-track');
const slides = document.querySelectorAll('.slick-slide');
const leftArrow = document.querySelector('.slick-prev');
const rightArrow = document.querySelector('.slick-next');
let currentSlide = 0;
const totalSlides = slides.length - 1;

// Initialisation des flèches
updateArrows();

// Ajouter des événements de clic pour les flèches
rightArrow.addEventListener('click', () => {
    if (currentSlide < totalSlides) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * 344}px)`; // 344px = largeur d'une image + marges
        updateArrows();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * 344}px)`;
        updateArrows();
    }
});

// Mise à jour des flèches (actives/inactives)
function updateArrows() {
    if (currentSlide === 0) {
        leftArrow.classList.add('slick-disabled');
    } else {
        leftArrow.classList.remove('slick-disabled');
    }

    if (currentSlide === totalSlides) {
        rightArrow.classList.add('slick-disabled');
    } else {
        rightArrow.classList.remove('slick-disabled');
    }
}
