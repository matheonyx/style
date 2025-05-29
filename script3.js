// Fonction pour changer l'offre
document.getElementById('change-offer').addEventListener('click', function() {
    alert("Fonctionnalité de changement d'offre en cours de développement.");
});

// Fonction pour transférer un profil
document.getElementById('transfer-profile').addEventListener('click', function() {
    let profileName = prompt("Veuillez entrer le nom du profil à transférer :");
    if (profileName) {
        alert(`Le profil "${profileName}" a été transféré avec succès !`);
    } else {
        alert("Le transfert de profil a été annulé.");
    }
});

// Fonction pour sélectionner une offre
let selectOfferButtons = document.querySelectorAll('.select-offer');
selectOfferButtons.forEach(button => {
    button.addEventListener('click', function() {
        let offerSelected = this.parentElement.querySelector('h3').innerText;
        alert(`Vous avez choisi l'offre : ${offerSelected}`);
        document.getElementById('offer').innerText = offerSelected;
    });
});


