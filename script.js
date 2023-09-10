function updateStatus() {
  var statusElement = document.getElementById('status');
  var statusTextElement = document.getElementById('status-text');
  var currentDate = new Date();
  var currentDay = currentDate.getDay(); // 0 (dimanche) à 6 (samedi)
  var currentHour = currentDate.getHours(); // 0 à 23

  var isOpen = false;
  var backgroundColor = '#e60000';
  var statusText = "L'Entraide est actuellement fermée pour tous vos dépôts";

  // Périodes exceptionnelles
  var exceptionOpenStartDate = new Date('2029-06-12 00:00:00');
  var exceptionOpenEndDate = new Date('2029-09-04 00:00:00');
  var exceptionClosedStartDate = new Date('2023-06-12 00:00:00');
  var exceptionClosedEndDate = new Date('2023-09-04 00:00:00');

  // Vérifier si l'Entraide est ouverte pour une période exceptionnelle
  if (currentDate >= exceptionOpenStartDate && currentDate <= exceptionOpenEndDate) {
    isOpen = true;
    backgroundColor = '#46b154';
    statusText = "L'Entraide est actuellement ouverte pour tous vos dépôts (période exceptionnelle ouverte)";
  }

  // Vérifier si l'Entraide est fermée pour une période exceptionnelle
  else if (currentDate >= exceptionClosedStartDate && currentDate <= exceptionClosedEndDate) {
    isOpen = false;
    backgroundColor = '#e60000';
    statusText = "L'Entraide est fermée pour tous vos dépôts jusqu'au samedi 9 septembre";
  }

  // Vérifier si l'Entraide est ouverte pour la période habituelle
  else if (
    // Période régulière (lundi de 14h à 17h, mardi de 9h à 12h, samedi de 9h à 12h)
    (currentDay === 1 && currentHour >= 14 && currentHour < 17) || 
    (currentDay === 2 && currentHour >= 9 && currentHour < 12) || 
    (currentDay === 6 && currentHour >= 9 && currentHour < 12)
  ) {
    isOpen = true;
    backgroundColor = '#46b154';
    statusText = "L'Entraide est actuellement ouverte pour tous vos dépôts";
  }

  // Mettre à jour l'arrière-plan et le texte en conséquence
  statusElement.style.backgroundColor = backgroundColor;
  statusTextElement.style.display = 'block'; // Assurer que le texte est visible
  statusTextElement.textContent = statusText;
}

// Démarrer la mise à jour de l'état au chargement de la page
window.addEventListener('DOMContentLoaded', updateStatus);

// Actualiser périodiquement l'état
setInterval(updateStatus, 60000); // Actualiser toutes les 60 secondes






// Obtenez la référence à la fenêtre modale et au bouton de fermeture
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

// Affichez la fenêtre modale lorsque la page se charge pour la première fois
window.onload = function () {
  modal.style.display = "block";
};

// Fermez la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture ou en dehors de la fenêtre
closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};