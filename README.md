# Projet de fin de semestre

## Principe du projet 

L'objectif est de réaliser une platerforme de gestion de parking. 

**Objectif** : Pemrettre aux clients de s'enregistrer ou s'abonner au parking, et à l'administrateur de gérer les places, d'ajouter ou de supprimer des clients, et finalement d'avoir un aperçu financier de son parking. 


### Frontend 

Le Frontend a été réalisé en premier, avec 4 pages différentes : accueil, vue client, vue admin et carte du parking. Le tout est codé en solid-js tailwindCSS. 

L'IA n'a été utilisée que pour valider et corriger du code existant. 

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