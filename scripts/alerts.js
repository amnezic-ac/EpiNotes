/*
window.onload = function() {
    alert("Bienvenue sur cette page !");
};
*/

document.getElementById("myButton").addEventListener("click", function() {
    alert("Bouton cliqué !");
});

fetch('../php/get_contributors.php')
            .then(response => response.json())  // Convertir la réponse en JSON
            .then(data => {
                let formattedContributors = data.map((contributor, index) => {
                    if (index === data.length - 1 && data.length > 1) {
                        return ` et ${contributor}`;
                    } else if (index === data.length - 2){
                        return `${contributor}, `
                    } else {
                        return `${contributor} `;
                    }
                }).join('');
                // Afficher tous les mots dans le span
                document.getElementById("contributors").innerText = formattedContributors;
            })
            .catch(error => {
                console.error('Erreur:', error);
            });

fetch('../php/get_directory.php')
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => {
    // Fonction récursive pour créer l'arborescence HTML
        function createTree(items, basePath = '') {
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
                    if (item.children) {
                        li.appendChild(createTree(item.children, basePath + '/' + item.name));
                    }
                }
                            
                ul.appendChild(li);  // Ajouter l'élément à la liste
            });
            return ul;  // Retourner l'élément <ul> complet
        }
        // Insérer l'arborescence dans le div ou autre conteneur
    document.getElementById("directoryTree").appendChild(createTree(data));
    })
    .catch(error => {
        console.error('Erreur:', error);
    });