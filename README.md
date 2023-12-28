# Picture blog GatsbyJS

Projet annexe effectué lors de mon stage au sein d'**Ultrō**.
Suite à la création d'un thème Wordpress sur-mesure pour le compte de **Picture Organic Clothing**, l'objectif était de réaliser cette fois çi l'intégration dynamique du blog via GatsbyJS, un framework basé sur React et alimenté par GraphQL (pour récupérer les articles et autres données basés sur Wordpress) afin de proposer une solution alternative (plus performante et mieux sécurisée) au client.

![Screenshot](screenshot.png)

## 🚀 Installation

Pour lancer le projet, vous pouvez suivre **le guide [Gatsby Wordpress Quickstart](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/docs/getting-started.md#quick-start)**

## 👀 Présentation des fichiers

1.  **`/node_modules`**: Ce répertoire contient tous les modules installés dépendant du projet (npm packages).

2.  **`/src`**: Ce répertoire contient le code relatif à toute la partie front-end du site tel que le header et les templates.

3.  **`gatsby-browser.js`**: Ce fichier permet de customiser/ajouter certains paramètres par défaut de Gatsby (ex: fichier style.css).

4.  **`gatsby-config.js`**: C'est le fichier de configuration principal du site - c'est içi que l'on peut spécifier les informations concernant le site (ex: titre et description) ainsi que déclarer les plugins que l'on souhaite utiliser.

5.  **`gatsby-node.js`**: Ce fichier permet d'exécuter des instructions (une seule fois lors du build) telle que exemple la création dynamique de pages à partir de Node APIs.

## 💫 Demo

Vidéo de démonstration du site disponible [ici](https://youtu.be/HH5K28mIiEk?si=y28ElToezK0eoxvL).
