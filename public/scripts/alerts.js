import { get_directory, get_contributors } from "./helper.js";

/*
window.onload = function() {
    alert("Bienvenue sur cette page !");
};
*/

document.getElementById("buttonAlert").addEventListener("click", function() {
    alert("Bouton cliqué !");
});

var $j = jQuery.noConflict();

$j(document).ready(function() {
    var contributors = get_contributors(); 
    // Afficher tous les contributeurs dans le span
    document.getElementById("contributors").innerText = addContributors(contributors);

    // Récupérer l'arborescence des fichiers
    var directories = get_directory('../Docs');
    // Insérer l'arborescence dans le div ou autre conteneur
    document.getElementById("directoryTree").appendChild(createTree(directories));
});