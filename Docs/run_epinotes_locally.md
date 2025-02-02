# EpiNotes

# Faire tourner le site en locale sur votre ordinateur
Si vous n'avez pas docker sur votre machine, installez-le:
```
sudo apt install docker
sudo apt install docker-compose
```

Vérifier que docker soit bien actif sur votre ordi:
```
sudo systemctl status docker
```

Si ce n'est pas le cas, lancez cette commande:
```
sudo systemctl start docker
```

Pour pouvoir lancer le site en locale, veuillez créer un fichier .env en root du repo avec les ports où vous voulez rediriger le site. Par exemple :
```
port=80
port2=81
```

lancer le contenaire docker avec:
```
sudo docker-compose up
```
petit tips: en ajoutant -d cela permets de lancer docker en arrière-plan

Il ne vous reste plus qu'à taper dans votre barre de recherche :
```
localhost
```

Et c'est bon ! Vous pouvez maintenant accéder au site en locale !