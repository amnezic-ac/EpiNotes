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
        } else if (index < data.length - 2){
            return `${contributor}, `
        } else {
            return `${contributor} `;
        }
    }).join('');

    return formattedContributors;
}