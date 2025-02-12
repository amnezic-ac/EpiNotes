import { get_directory, get_contributors } from "./helper.js";

/*
window.onload = function() {
    alert("Bienvenue sur cette page !");
};
*/

document.getElementById("myButton").addEventListener("click", function() {
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

// Fonction récursive pour créer l'arborescence HTML
function createTree(items, basePath = '../Docs') {
    let ul = document.createElement('ul');  // Créer un élément <ul>

    items.forEach(item => {
        let li = document.createElement('li');  // Créer un élément <li>
        if (item.type === 'file' ){
            let link = document.createElement('a');
            link.href = basePath + '/' + item.name;
            link.target = "_blank";
            link.textContent = item.name;
            // console.log("Fichier link href:", filePath);
            li.appendChild(link);
        } else if (item.type === 'directory') {
            li.textContent = item.name;
            if (item.contents) {
                li.appendChild(createTree(item.contents, basePath + '/' + item.name));
            }
        }
        ul.appendChild(li);  // Ajouter l'élément à la liste
    });

    return ul;  // Retourner l'élément <ul> complet
}

// Fonction pour formater les contributeurs
function addContributors(data){
    let formattedContributors = data.map((contributor, index) => {
        if (index === data.length - 1 && data.length > 1) {
            return ` et ${contributor}`;
        } else if (index === data.length - 2){
            return `${contributor}, `
        } else {
            return `${contributor} `;
        }
    }).join('');

    return formattedContributors;
}