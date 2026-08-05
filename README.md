# 🎲 Devoir CEF - Trouve ton artisan
Application mobile-first permettant aux utilisateurs de trouver les artisans de leur région et de rentrer en contact avec eux.

<img width="386" height="1184" alt="home" src="https://github.com/user-attachments/assets/db7c91fb-970e-4917-80bd-032cd3dd971f" /> <br>
<img width="1920" height="1092" alt="home_desktop" src="https://github.com/user-attachments/assets/0f108829-672c-4a6e-ba4b-8a364260f2ab" />


## ✨ Fonctionnalités
- Rechercher un artisan par catégorie
- Consulter les fiches artisans
- Envoyer un message via le formulaire de contact
- Responsive design (mobile, tablette, desktop)


## 📁 Structure du projet

artisan_react_js/
- frontend/  **Application React**
- backend/  **Serveur Express.js**
- database/  **Scripts SQL** (création + alimentation)
- README.md


## ✅ Prérequis
Avant de lancer le projet, assurez-vous d’avoir installé :

- Node.js v18 ou plus
- npm
- MySQL
- Un IDE (VSCode recommandé)
- Git


## 🚀 Installation

### 1. Cloner le projet
``` 
git clone https://github.com/votre-utilisateur/nom-du-repo.git
cd nom-du-repo
```

### 2. Installer les dépendances
**Backend** :
```
cd backend
npm install
```
**Frontend** :
```
cd ../frontend
npm install
```

### 3. Base de données

**Création** :
Dans un outil comme MySQL Workbench ou en ligne de commande, exécutez :

```
CREATE DATABASE nom_de_ta_bdd;
USE nom_de_ta_bdd;
```

Exécutez ensuite le script schema.sql pour créer les tables.

**Alimentation** :
- Chargez les données avec le script insert_data.sql.

**⚙️ Configuration des variables d'environnement** :

- Créez un fichier .env.local dans /backend avec ce contenu (à adapter) :

```
MYSQL_DATABASE=artisan
MYSQLUSER=root
MYSQL_ROOT_PASSWORD=ton_mot_de_passe_mysql
MYSQLHOST=localhost
MYSQLPORT=3306

PORT=5000

EMAIL_USER=ton.email@example.com
EMAIL_PASS=mot_de_passe_email

CONTACT_FORM_TOKEN=un_token_secret
```

**Dans /frontend, créez un fichier .env.local avec :**

```
REACT_APP_API_URL=http://localhost:5000
```

### ▶️ 5. Lancement
**Backend** (port 5000 par défaut) :
```
cd backend
npm run dev
```

**Frontend** :
```
cd ../frontend
npm run dev
```

## L’application est accessible à l’adresse : https://trouve-ton-artisan-react-js.vercel.app/

## 👨‍💻 Auteur
Simon — Développeur web Fullstack
Projet réalisé dans le cadre de ma formation

