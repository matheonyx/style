function startDownload(button) {
    // Cache le contenu du bouton et affiche le spinner de chargement
    const originalContent = button.innerHTML;
    button.innerHTML = '<div class="loading-spinner"></div>';
    button.querySelector('.loading-spinner').style.display = 'block';

    // Simule un téléchargement de 3 secondes
    setTimeout(() => {
        // Remet le contenu original du bouton
        button.innerHTML = originalContent;
    }, 3000); // 3000 ms = 3 secondes
}
