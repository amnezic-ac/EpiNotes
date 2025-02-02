Voici une brève présentation du projet Epinotes.

Le projet Epinotes est un projet, initié par le campus toulousain, consistant à regrouper tous les outils pratiques et utilisés quasiment quotidiennement par les étudiants d'EPITA. Pour accéder au site actuel d'EpiNotes : https://epinotes.fr/, tels que des annales d'examens, des cours (venant de profs ou d'élèves), calcul de moyennes, etc.

Le but de ce projet est de créer un site facilement maintenable ainsi qu'une actualisation plus régulière des cours, grâce à un système de partage de fichiers plus accessible.

Comme la version actuelle d'EpiNotes, seuls les cours écrits par les élèves seront publiquement accessibles. Il faudra se connecter avec une adresse mail EPITA ou un EpiNotes id pour accéder aux autres documents.

Le reste du Readme concernera uniquement les fonctionnalités une fois l'utilisateur connecté.

Les fichiers devront être séparés en deux groupes différents :
    - les cours: les documents qui ne concernent que les notions théoriques abordées durant les CMs. Ces documents seront rédigés par les étudiants ou par les profs si ces derniers sont d'accord.
    - les supports: les documents qui ne sont pas des cours mais qui sont quand même utiles, comme les TDs, les TPs dans certaines matières. Pour éviter toute tentative de triche, il n'y aura évidemment pas les sujets des DMs (pour la prépa en algo) ni les sujets de Piscines/Ateliers/Projets (pour l'Ing)
    - les annales

Voici les différentes fonctionnalités qui sont prévues (des plus nécessaires aux plus optionnelles):
    - avoir une liste des fichiers qui puissent être téléchargeables
    - avoir une arborescence propre (d'abord organiser par année)
    - permettre une recherche de documents via son leurs noms (par RegEx)
    - permettre à n'importe quelle personne connectée de:
        * déposer un nouveau document (via drag-n-drop ou sélection dans le file explorer) (vérification au minimum de l'extension)
        * permettre à l'utilisateur de proposer une correction d'un document ou de prévenir d'un bug du site
        * proposer sa "candidature" à Epinotes
    - permettre de pouvoir lire le document
        * dans un nouvel onglet avec pdf reader si c'est un document type sujet
        * dans un outil spécial pour ce qui est du code (afin de pouvoir afficher du code type Python ou C)
    - permettre une recherche de documents par tag (Matière, Année, Type...)
    - garder aussi les anciens sujets sur les documents qui ont changé entre deux années
    - mettre en place un outil simple afin de calculer facilement les moyennes (nécessiterait un ajout manuel des coefficients de chaque matière à chaque changement de modalités)
    - réutiliser le QCM Maker déjà présent sur EpiNotes pour faciliter la création de QCM à la façon Epita
    - permettre un accès facile et rapide à Zeus ainsi qu'à tous les documents assez utiles (style Syllabus, réglement intérieur/SMs, etc.)
    - proposer une visualisation HTML/CSS des documents PDFs directement dans EpiNotes

À terme il serait intéressant de voir s'il est possible de généraliser cet outil pour le proposer à d'autres structures (mon idée perso)