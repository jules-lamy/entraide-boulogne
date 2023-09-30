
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