(function () {
  // ✅ Bascule le son de la vidéo
  function reelsToggleMute() {
    const vid = document.getElementById('reels-reelVideo');
    const muteIcon = document.getElementById('reels-muteIcon');

    if (!vid || !muteIcon) return;

    vid.muted = !vid.muted;
    muteIcon.innerHTML = vid.muted
      ? `<path d="M1 1l22 22M23 1L1 23" stroke="white" stroke-width="2" fill="none"/>`
      : `<path d="M4 9v6h4l5 5V4l-5 5H4z" fill="white"/>`;

    muteIcon.setAttribute('viewBox', '0 0 24 24');
    muteIcon.setAttribute('width', '12');
    muteIcon.setAttribute('height', '12');
    muteIcon.parentElement.setAttribute('aria-label', vid.muted ? 'Le son est coupé' : 'Le son est activé');
  }

  // ✅ Ouvre/ferme le menu Reels
  function reelsToggleContent() {
    const container = document.querySelector('.reels-clone');
    if (!container) return;

    const content = document.getElementById('reels-content');
    if (!content) return;

    content.classList.toggle('active');

    if (content.classList.contains('active')) {
      // Ajoute listeners pour fermeture automatique
      document.addEventListener('keydown', escKeyHandler);
      document.addEventListener('click', outsideClickHandler);
    } else {
      document.removeEventListener('keydown', escKeyHandler);
      document.removeEventListener('click', outsideClickHandler);
    }
  }

  // 🔐 Ferme avec Échap
  function escKeyHandler(e) {
    if (e.key === 'Escape') {
      closeReelsContent();
    }
  }

  // 🔐 Ferme si clic en dehors
  function outsideClickHandler(e) {
    const content = document.getElementById('reels-content');
    if (!content.contains(e.target)) {
      closeReelsContent();
    }
  }

  // 🔐 Ferme proprement
  function closeReelsContent() {
    const content = document.getElementById('reels-content');
    if (content && content.classList.contains('active')) {
      content.classList.remove('active');
    }
    document.removeEventListener('keydown', escKeyHandler);
    document.removeEventListener('click', outsideClickHandler);
  }

  // ⬆️ Expose dans le scope global
  window.reelsToggleMute = reelsToggleMute;
  window.reelsToggleContent = reelsToggleContent;
})();
