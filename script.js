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
  var exceptionOpenStartDate = new Date('2029-05-24 00:00:00');
  var exceptionOpenEndDate = new Date('2029-05-25 00:00:00');
  var exceptionClosedStartDate = new Date('2029-12-25 00:00:00');
  var exceptionClosedEndDate = new Date('2029-12-31 00:00:00');

  // Vérifier si l'Entraide est ouverte
  if (
    // Période régulière (lundi de 14h à 17h, mardi de 9h à 12h, samedi de 9h à 12h)
    (currentDay === 1 && currentHour >= 14 && currentHour < 17) || 
    (currentDay === 2 && currentHour >= 9 && currentHour < 12) || 
    (currentDay === 6 && currentHour >= 9 && currentHour < 12) ||

    // Période exceptionnelle "ouverte"
    (currentDate >= exceptionOpenStartDate && currentDate <= exceptionOpenEndDate)
  ) {
    isOpen = true;
    backgroundColor = '#46b154';
    statusText = "L'Entraide est actuellement ouverte pour tous vos dépôts";
  }

  // Vérifier si l'Entraide est fermée (période exceptionnelle "fermée")
  else if (currentDate >= exceptionClosedStartDate && currentDate <= exceptionClosedEndDate) {
    isOpen = false;
    backgroundColor = '#e60000';
    statusText = "L'Entraide est actuellement fermée pour tous vos dépôts";
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
