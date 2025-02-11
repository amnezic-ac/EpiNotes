<?php
// Fonction pour obtenir les fichiers et répertoires dans un répertoire donné
function getDirectoryTree($dir) {
    $result = [];
    
    // Vérifier si le répertoire existe
    if (is_dir($dir)) {
        // Ouvrir le répertoire
        $files = scandir($dir);
        
        foreach ($files as $file) {
            // Ignorer les . et .. (répertoires de navigation)
            if ($file == '.' || $file == '..') continue;
            
            // Créer le chemin complet pour chaque élément
            $fullPath = $dir . DIRECTORY_SEPARATOR . $file;
            
            // Si c'est un dossier, récursivement récupérer son contenu
            if (is_dir($fullPath)) {
                $result[] = [
                    'name' => $file,
                    'type' => 'directory',
                    'children' => getDirectoryTree($fullPath)  // Récursion pour explorer les sous-répertoires
                ];
            } else {
                // Si c'est un fichier, juste ajouter son nom
                $result[] = [
                    'name' => $file,
                    'type' => 'file'
                ];
            }
        }
    }
    
    return $result;
}

// Répertoire à scanner (modifie le chemin ici selon ton besoin)
// $dirPath = '../Docs/tree';  // Remplace par le chemin de ton répertoire

// Récupérer l'arborescence
$directoryTree = getDirectoryTree('../Docs');

// Renvoie la structure en JSON
echo json_encode($directoryTree);
?>