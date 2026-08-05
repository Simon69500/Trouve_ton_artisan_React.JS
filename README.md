# 🎲 Devoir CEF - Trouve ton artisan

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)

Application mobile-first permettant aux utilisateurs de trouver les artisans de leur région et de rentrer en contact avec eux.

<img width="386" height="1184" alt="home" src="https://github.com/user-attachments/assets/db7c91fb-970e-4917-80bd-032cd3dd971f" /> <br>
<img width="1920" height="1092" alt="home_desktop" src="https://github.com/user-attachments/assets/0f108829-672c-4a6e-ba4b-8a364260f2ab" />

**Démo en ligne :** [trouve-ton-artisan-react-js.vercel.app](https://trouve-ton-artisan-react-js.vercel.app/)

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Endpoints de l'API](#endpoints-de-lapi)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Variables d'environnement](#variables-denvironnement)
- [Lancement](#lancement)
- [Limitations connues](#limitations-connues)
- [Auteur](#auteur)

---

## ✨ Fonctionnalités

- Rechercher un artisan par catégorie
- Rechercher un artisan par nom
- Mettre en avant une sélection d'artisans "top" sur la page d'accueil
- Consulter les fiches artisans
- Envoyer un message via le formulaire de contact (email transmis à l'artisan)
- Responsive design (mobile, tablette, desktop)

## Stack technique

| Domaine | Choix technique |
|---|---|
| Frontend | React 19, React Router, React Bootstrap |
| Backend | Node.js, Express |
| Base de données | MySQL, via Sequelize (ORM) |
| Envoi d'email | Nodemailer (via un compte Gmail) |
| Hébergement backend | Render |
| Hébergement frontend | Vercel |

Le frontend consomme l'API via `fetch`/`axios` en pointant vers l'URL définie par `REACT_APP_API_URL`, ce qui permet de faire tourner le frontend en local contre un backend distant (ou l'inverse) sans changer le code.

## Structure du projet

```
Trouve_ton_artisan_React.JS/
├── backend/
│   ├── config/
│   │   └── sequelize.js     # Connexion Sequelize à MySQL (config active)
│   ├── controllers/          # Logique des routes (artisans, catégories, contact)
│   ├── models/                # Modèles Sequelize (Artisan, Category)
│   ├── routes/                 # Déclaration des routes Express
│   ├── services/               # Requêtes Sequelize appelées par les contrôleurs
│   ├── middleware/
│   │   └── checkToken.js      # Vérification de token (voir Limitations connues)
│   └── server.js               # Point d'entrée du serveur Express
├── frontend/
│   └── src/
│       ├── api/                 # Configuration de l'URL de l'API
│       ├── components/          # Composants React réutilisables
│       └── pages/                # Pages de l'application
└── database/
    ├── schema.sql               # Création des tables
    └── insert_data.sql          # Données de test
```

Le projet suit une séparation **routes → controllers → services → models**, chaque contrôleur déléguant l'accès aux données à un service dédié, lequel s'appuie sur les modèles Sequelize. Ça isole la logique métier du câblage HTTP et facilite les évolutions futures (changer de moteur de base de données n'impacterait, en théorie, que la couche services/models).

## Endpoints de l'API

### Catégories (`/categories`)

| Méthode | Route | Description |
|---|---|---|
| GET | `/categories` | Liste toutes les catégories |
| GET | `/categories/:id` | Récupère une catégorie par son identifiant |
| GET | `/categories/:id/artisans` | Liste les artisans d'une catégorie donnée |

### Artisans (`/artisans`)

| Méthode | Route | Description |
|---|---|---|
| GET | `/artisans` | Liste tous les artisans |
| GET | `/artisans/nom?nom=...` | Recherche des artisans par nom (paramètre de requête `nom`) |
| GET | `/artisans/top` | Liste les artisans mis en avant (`top_artisan = true`) |
| GET | `/artisans/:id` | Récupère un artisan par son identifiant |

### Contact (`/contact`)

| Méthode | Route | Description |
|---|---|---|
| POST | `/contact` | Envoie un email à l'artisan via le formulaire de contact (nom, email, objet, message requis) |

## Prérequis

- Node.js v18 ou plus
- npm
- MySQL
- Un IDE (VSCode recommandé)
- Git

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Simon69500/Trouve_ton_artisan_React.JS.git
cd Trouve_ton_artisan_React.JS
```

### 2. Installer les dépendances

**Backend :**
```bash
cd backend
npm install
```

**Frontend :**
```bash
cd ../frontend
npm install
```

### 3. Base de données

Créer la base :
```sql
CREATE DATABASE artisan;
```

Exécuter ensuite les scripts dans l'ordre :
```bash
mysql -u root -p artisan < database/schema.sql
mysql -u root -p artisan < database/insert_data.sql
```

## Variables d'environnement

**Dans `/backend`, créer un fichier `.env.local` :**

```
DB_NAME=artisan
DB_USER=root
DB_PASSWORD=ton_mot_de_passe_mysql
DB_HOST=localhost
DB_PORT=3306
PORT=5000

FRONTEND_URL=http://localhost:3000

EMAIL_USER=ton.email@example.com
EMAIL_PASS=ton_mot_de_passe_application

CONTACT_FORM_TOKEN=un_token_secret
```

Ces noms de variables sont ceux lus par `backend/config/sequelize.js` et `backend/server.js` — un nom différent (par exemple `DB_PASSWORD` au lieu de `DB_PASS`, ou l'inverse) ne sera tout simplement pas pris en compte par Sequelize.

`EMAIL_PASS` doit être un **mot de passe d'application Gmail** (pas le mot de passe du compte Google), généré depuis [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).

`FRONTEND_URL` est utilisée dans la configuration CORS du backend : sans elle, un frontend déployé (Vercel) ne pourra pas appeler l'API en production — seul `http://localhost:3000` fonctionnera.

**Dans `/frontend`, créer un fichier `.env.local` :**

```
REACT_APP_API_URL=http://localhost:5000
```

## Lancement

**Backend** (port 5000 par défaut) :
```bash
cd backend
npm run dev
```

**Frontend** :
```bash
cd ../frontend
npm start
```

L'application frontend est accessible sur `http://localhost:3000`.

## Limitations connues

Points identifiés en lisant le code, à garder en tête pour une évolution future du projet :

- **`middleware/checkToken.js`** (vérification de `CONTACT_FORM_TOKEN`) existe dans le code mais n'est appliqué sur aucune route : `POST /contact` n'est donc pas protégée par ce token pour l'instant.
- **`express-rate-limit`** est présent dans les dépendances (`backend/package.json`) mais n'est configuré sur aucune route : il n'y a pas de limitation de débit active, y compris sur le formulaire de contact.
- **`backend/config/db.js`** définit un pool MySQL avec des identifiants en dur ; ce fichier n'est importé nulle part dans le code actif (`server.js` utilise `config/sequelize.js`) — code mort, sans risque tant qu'il reste inutilisé, mais à nettoyer ou à retirer.

## 👨‍💻 Auteur

Simon — Développeur web Fullstack
Projet réalisé dans le cadre de ma formation
