# Projet de fin de semestre

## Principe du projet 

L'objectif est de réaliser une platerforme de gestion de parking. 

**Objectif** : Pemrettre aux clients de s'enregistrer ou s'abonner au parking, et à l'administrateur de gérer les places, d'ajouter ou de supprimer des clients, et finalement d'avoir un aperçu financier de son parking. 


### Frontend 

Le Frontend a été réalisé en premier, avec 4 pages différentes : accueil, vue client, vue admin et carte du parking. Le tout est codé en solid-js tailwindCSS. 

L'IA n'a été utilisée que pour valider et corriger du code existant. 
#### Interface client
La page routes/client.jsx donne un aperçu statique de ce que pourrait être le rendu de l'interface client. Cette page n'xisterait pas dans l'architecture réelle du site s'il devait être déployé.\
Le dossier routes/clients/[id].jsx donne l'idée de créer une "dynamic route" utilisant le paramètre id pour fournir une interface client personnalisée. Le fichier [id].jsx ne fonctionne pas. Il suppose l'existence de : 
 - une base de données clients.db avec les champs suivants : 
 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,\
    email TEXT\
    password TEXT\
    vehicules ARRAY\

  )
   - une bdd vehicules.db avec les champs suivants : 
  (
    vehicule TEXT\
    immatriculation TEXT\
  )
   - une base de données reservations.db avec (au moins) les champs suivants :
   (
    vehicule TEXT\
    immatriculation TEXT\
    heure_arrivee TEXT\
    heure_fin TEXT\
    numero_place TEXT\
    cout_actuel TEXT\
  )\
  ainsi que du fichier server/users/users.js implémentant à l'aide de SQL les server functions :
   - getClient qui prend en argument un entier id et renvoie, si elle existe, l'unique ligne de clients.db dont l'id vaut id, sous forme d'objet
    - getReservations qui prend en argument un entier id et renvoie la liste des lignes de reservations.db correspondant à des vehicules figurant dans getClient(id).vehicules
    - getCurrentReservations qui prend en argument un entier id et renvoie la liste des lignes de reservations.db correspondant à des vehicules figurant dans getClient(id).vehicules et dont heure_fin n'est pas encore passée\
Il manque bien sûr un système de sécurité (s'appuyant par exemple sur des cookies de session qui redirigerait sur la page /index si le client n'est pas habilité à visiter la page donnée (s'il n'est pas au préalable passé par le formulaire de connexion de la page /index))

### Backend

Sur le backend, nous avons eu quelques soucis, notamment sur la fonction ```addCar``` du fichier ```parking_spaces.js``` qui ne parvient pas à communiquer avec le client ```admin.jsx``` malgré beaucoup de tests. Nous avons utilisés notamment l'IA pour vérifier la cohérence de ces programmes, et aucune n'a pu nous explilquer cette absence de communication entre les deux côtés. 

Plus généralement, la technologie employée repose sur le framework haut-niveau de ```SolidStart```. Les fonctions API ne sont pas codées explicitement mais plutôt transmises au client via le système de ```query```. 

Nous souhaiterions reprendre le travail sur le backend, qui reste très incomplet, suite à une grosse perte de temps sur le debug du ```addCar``` le plus rapidement possible, afin de rendre le site réellement fonctionnel, notamment avec l'implémentation backend de la vue ```map``` et la création dans un dernier temps d'une plateforme login pour les clients et admins. 

L'IA a été utilisée pour valider le code existant et prendre en main les nouveaux outils. Cependant, le code réel a été écrit à la main. 




## Installation 

Installation des dépendances 

> ```bun install```

Test avec serveur de développement 

> ```bun dev```