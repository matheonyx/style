document.addEventListener('DOMContentLoaded', function () {

  // ✅ Bascule le son de la vidéo

  function reelsToggleMute() {

    const vid = document.getElementById('reels-reelVideo');

    const muteIcon = document.getElementById('reels-muteIcon');

    if (!vid || !muteIcon) return;

    vid.muted = !vid.muted;

    muteIcon.innerHTML = vid.muted

      ? `<path clip-rule="evenodd" fill-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fill="white"></path>`

      : `<path clip-rule="evenodd" fill-rule="evenodd" d="M22.8 0.6C21.9 -0.2 20.5 0.3 20.1 1.5L12.8 22.9H2.7C1.7 22.9 0.8 23.7 0.8 24.8V34.9C0.8 36 1.7 36.8 2.7 36.8H10.7L19.6 47.2C20.2 48 21.3 48.3 22.1 47.8C23 47.3 23.4 46.2 23.1 45.3L20.5 36.8H29.7C30.4 36.8 31.1 36.5 31.6 36L47.2 20.4C48.1 19.5 48.1 18 47.2 17.1L31.6 1.5C30.7 0.6 29.2 0.6 28.3 1.5C27.8 2 27.5 2.7 27.7 3.4L29.4 9.9H20.2L22.8 0.6ZM25.7 14.5L24.5 18.7H30.8L34.9 14.5H25.7ZM24.5 22.9H34.5L38.7 18.7H28.7L24.5 22.9ZM30.8 27.1L27.7 25.4L29.4 31.9L32.5 30.2L30.8 27.1Z" fill="white"></path>`;

    muteIcon.setAttribute('viewBox', '0 0 48 48');

    muteIcon.setAttribute('width', '24'); // Increased size for better visibility

    muteIcon.setAttribute('height', '24'); // Increased size for better visibility

    muteIcon.style.display = 'block'; // Ensure icon is visible

    muteIcon.parentElement.setAttribute('aria-label', vid.muted ? 'Le son est coupé' : 'Le son est activé');

  }

  // ✅ Ouvre/ferme le menu Reels

  function reelsToggleContent() {

    const container = document.querySelector('.reels-clone');

    if (!container) return;

    const content = document.getElementById('reels-content');

    if (!content) return;

    content.classList.toggle('active');

    container.classList.toggle('active'); // Toggle active on parent for pointer-events

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

    const toggleBtn = document.querySelector('.reels-menu-toggle-btn');

    if (!content.contains(e.target) && !toggleBtn.contains(e.target)) {

      closeReelsContent();

    }

  }

  // 🔐 Ferme proprement

  function closeReelsContent() {

    const container = document.querySelector('.reels-clone');

    const content = document.getElementById('reels-content');

    if (content && content.classList.contains('active')) {

      content.classList.remove('active');

      container.classList.remove('active');

    }

    document.removeEventListener('keydown', escKeyHandler);

    document.removeEventListener('click', outsideClickHandler);

  }

  // ✅ Gère l'affichage du sélecteur d'emoji

  function reelsToggleEmojiPicker() {

    const emojiPicker = document.getElementById('reels-emojiPicker');

    if (emojiPicker) {

      emojiPicker.classList.toggle('active');

    }

  }

  // ✅ Ajoute un emoji au champ de commentaire

  function reelsAddEmoji(emoji) {

    const commentInput = document.getElementById('reels-commentInput');

    if (commentInput) {

      commentInput.value += emoji;

      commentInput.focus();

    }

    reelsToggleEmojiPicker(); // Ferme le sélecteur après ajout

  }

  // ✅ Soumet un commentaire

  function reelsSubmitComment() {

    const commentInput = document.getElementById('reels-commentInput');

    const commentsSection = document.getElementById('reels-comments');

    if (!commentInput || !commentsSection || !commentInput.value.trim()) return;

    const newComment = document.createElement('div');

    newComment.className = 'reels-comment';

    newComment.innerHTML = `<strong>utilisateur</strong> ${commentInput.value}<span class="reels-timestamp">Maintenant</span>`;

    commentsSection.appendChild(newComment);

    commentInput.value = ''; // Réinitialise le champ

  }

  // ⬆️ Expose dans le scope global

  window.reelsToggleMute = reelsToggleMute;

  window.reelsToggleContent = reelsToggleContent;

  window.reelsToggleEmojiPicker = reelsToggleEmojiPicker;

  window.reelsAddEmoji = reelsAddEmoji;

  window.reelsSubmitComment = reelsSubmitComment;

  // ✅ Initialize mute icon visibility on load

  const muteIcon = document.getElementById('reels-muteIcon');

  if (muteIcon) {

    muteIcon.style.display = 'block';

    muteIcon.setAttribute('width', '24');

    muteIcon.setAttribute('height', '24');

  }

});
