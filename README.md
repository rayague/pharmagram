Pharmagram

Pharmagram est une plateforme digitale innovante dédiée à la vente de médicaments en ligne, avec un service de livraison rapide et sécurisé. Nous visons à simplifier l'accès aux produits pharmaceutiques et à améliorer l'expérience des utilisateurs en matière de santé.
📋 Fonctionnalités

    Commande en ligne de médicaments : Commandez vos médicaments et produits de santé en quelques clics.
    Livraison rapide et sécurisée : Recevez vos produits directement à domicile en toute sécurité.
    Interface intuitive : Une plateforme facile à utiliser pour les patients et les professionnels de la santé.
    Accès à l’historique des commandes : Consultez et suivez vos commandes passées pour une meilleure gestion.
    Notifications en temps réel : Soyez informé du statut de votre commande à chaque étape.

🚀 Technologies utilisées

    Front-end : HTML, CSS, JavaScript, Bootstrap
    Back-end : Laravel (PHP Framework)
    Base de données : MySQL
    API : Intégration d'APIs pour la gestion des paiements et des livraisons

🔧 Prérequis

Avant de lancer ce projet en local, assurez-vous d'avoir les éléments suivants installés :

    Node.js (version 14 ou plus)
    Composer (gestionnaire de dépendances PHP)
    MySQL (pour la base de données)

💻 Installation

Suivez ces étapes pour configurer le projet en local :

    Clonez ce dépôt :

    bash

git clone https://github.com/ton-nom-utilisateur/pharmagram.git

Accédez au dossier du projet :

bash

cd pharmagram

Installez les dépendances front-end et back-end :

bash

npm install
composer install

Configurez le fichier .env avec vos informations de base de données et d'autres configurations essentielles (copiez le fichier .env.example).

Générez la clé d'application Laravel :

bash

php artisan key:generate

Effectuez les migrations de la base de données :

bash

php artisan migrate

Lancez le serveur de développement :

bash

    php artisan serve

Le projet devrait être accessible à l'adresse http://localhost:8000.
📚 Documentation

Pour plus de détails sur le fonctionnement du projet et les endpoints disponibles, consultez la documentation API.
🛠 Contribuer

Les contributions sont les bienvenues ! Si vous avez des idées ou des améliorations, veuillez soumettre une pull request ou ouvrir une issue.

    Fork le projet
    Créez votre branche de fonctionnalité (git checkout -b feature/NouvelleFonctionnalité)
    Effectuez vos modifications et validez (git commit -m 'Ajout d'une nouvelle fonctionnalité')
    Poussez votre branche (git push origin feature/NouvelleFonctionnalité)
    Ouvrez une pull request

📝 Licence

Ce projet est sous licence MIT.
📞 Contact

Pour toute question ou support, n'hésitez pas à nous contacter à contact@pharmagram.com.
