document.addEventListener('DOMContentLoaded', function () {

  // ✅ Bascule le son de la vidéo

  function reelsToggleMute1() {

    const vid = document.getElementById('reels-reelVideo1');

    const muteIcon = document.getElementById('reels-muteIcon1');

    if (!vid || !muteIcon) return;

    vid.muted = !vid.muted;

    muteIcon.innerHTML = vid.muted

      ? `<path clip-rule="evenodd" fill-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"></path>`

      : `<path d="M16.636 7.028a1.5 1.5 0 1 0-2.395 1.807 5.365 5.365 0 0 1 1.103 3.17 5.378 5.378 0 0 1-1.105 3.176 1.5 1.5 0 1 0 2.395 1.806 8.396 8.396 0 0 0 1.71-4.981 8.39 8.39 0 0 0-1.708-4.978Zm3.73-2.332A1.5 1.5 0 1 0 18.04 6.59 8.823 8.823 0 0 1 20 12.007a8.798 8.798 0 0 1-1.96 5.415 1.5 1.5 0 0 0 2.326 1.894 11.672 11.672 0 0 0 2.635-7.31 11.682 11.682 0 0 0-2.635-7.31Zm-8.963-3.613a1.001 1.001 0 0 0-1.082.187L5.265 6H2a1 1 0 0 0-1 1v10.003a1 1 0 0 0 1 1h3.265l5.01 4.682.02.021a1 1 0 0 0 1.704-.814L12.005 2a1 1 0 0 0-.602-.917Z"></path>`;

    muteIcon.setAttribute('viewBox', '0 0 24 24');

    muteIcon.setAttribute('width', '12');

    muteIcon.setAttribute('height', '12');

    muteIcon.setAttribute('fill', 'currentColor');

    muteIcon.style.display = 'block'; // Ensure icon is visible

    muteIcon.parentElement.setAttribute('aria-label', vid.muted ? 'Activer le son' : 'Désactiver le son');

  }

  // ✅ Ouvre/ferme le menu Reels

  function reelsToggleContent1() {

    const container = document.querySelector('.reels-clone1');

    if (!container) return;

    const content = document.getElementById('reels-content1');

    if (!content) return;

    content.classList.toggle('active');

    container.classList.toggle('active'); // Toggle active on parent for pointer-events

    if (content.classList.contains('active')) {

      // Ajoute listeners pour fermeture automatique

      document.addEventListener('keydown', escKeyHandler1);

      document.addEventListener('click', outsideClickHandler1);

      // Initialize mute icon visibility when menu opens

      const muteIcon = document.getElementById('reels-muteIcon1');

      if (muteIcon) {

        muteIcon.style.display = 'block';

        muteIcon.setAttribute('width', '12');

        muteIcon.setAttribute('height', '12');

        muteIcon.setAttribute('fill', 'currentColor');

        const vid = document.getElementById('reels-reelVideo1');

        if (vid && vid.muted) {

          muteIcon.innerHTML = `<path clip-rule="evenodd" fill-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"></path>`;

          muteIcon.parentElement.setAttribute('aria-label', 'Activer le son');

        }

      }

    } else {

      document.removeEventListener('keydown', escKeyHandler1);

      document.removeEventListener('click', outsideClickHandler1);

    }

  }

  // 🔐 Ferme avec Échap

  function escKeyHandler1(e) {

    if (e.key === 'Escape') {

      closeReelsContent1();

    }

  }

  // 🔐 Ferme si clic en dehors

  function outsideClickHandler1(e) {

    const content = document.getElementById('reels-content1');

    const toggleBtn = document.querySelector('.reels-menu-toggle-btn1');

    if (!content.contains(e.target) && !toggleBtn.contains(e.target)) {

      closeReelsContent1();

    }

  }

  // 🔐 Ferme proprement

  function closeReelsContent1() {

    const container = document.querySelector('.reels-clone1');

    const content = document.getElementById('reels-content1');

    if (content && content.classList.contains('active')) {

      content.classList.remove('active');

      container.classList.remove('active');

    }

    document.removeEventListener('keydown', escKeyHandler1);

    document.removeEventListener('click', outsideClickHandler1);

  }

  // ✅ Gère l'affichage du sélecteur d'emoji

  function reelsToggleEmojiPicker1() {

    const emojiPicker = document.getElementById('reels-emojiPicker1');

    if (emojiPicker) {

      emojiPicker.classList.toggle('active');

    }

  }

  // ✅ Ajoute un emoji au champ de commentaire

  function reelsAddEmoji1(emoji) {

    const commentInput = document.getElementById('reels-commentInput1');

    if (commentInput) {

      commentInput.value += emoji;

      commentInput.focus();

    }

    reelsToggleEmojiPicker1(); // Ferme le sélecteur après ajout

  }

  // ✅ Soumet un commentaire

  function reelsSubmitComment1() {

    const commentInput = document.getElementById('reels-commentInput1');

    const commentsSection = document.getElementById('reels-comments1');

    if (!commentInput || !commentsSection || !commentInput.value.trim()) return;

    const newComment = document.createElement('div');

    newComment.className = 'reels-comment1';

    newComment.innerHTML = `<strong>utilisateur</strong> ${commentInput.value}<span class="reels-timestamp1">Maintenant</span>`;

    commentsSection.appendChild(newComment);

    commentInput.value = ''; // Réinitialise le champ

  }

  // ⬆️ Expose dans le scope global

  window.reelsToggleMute1 = reelsToggleMute1;

  window.reelsToggleContent1 = reelsToggleContent1;

  window.reelsToggleEmojiPicker1 = reelsToggleEmojiPicker1;

  window.reelsAddEmoji1 = reelsAddEmoji1;

  window.reelsSubmitComment1 = reelsSubmitComment1;

  // ✅ Initialize mute icon visibility on load

  const muteIcon = document.getElementById('reels-muteIcon1');

  if (muteIcon) {

    muteIcon.style.display = 'block';

    muteIcon.setAttribute('width', '12');

    muteIcon.setAttribute('height', '12');

    muteIcon.setAttribute('fill', 'currentColor');

    const vid = document.getElementById('reels-reelVideo1');

    if (vid && vid.muted) {

      muteIcon.innerHTML = `<path clip-rule="evenodd" fill-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"></path>`;

      muteIcon.parentElement.setAttribute('aria-label', 'Activer le son');

    }

  }

});
