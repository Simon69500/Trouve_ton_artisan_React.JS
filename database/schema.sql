/*Création de la base de données Trouve ton artisan*/
/* Créations des Tables*/

-- Table des Categorie
CREATE TABLE Categorie(
   id_categorie VARCHAR(50),
   nom VARCHAR(100) NOT NULL,
   PRIMARY KEY(id_categorie),
   UNIQUE(nom)
);

-- Table des Artisan
CREATE TABLE Artisan(
   id_artisan VARCHAR(50),
   id_categorie VARCHAR(50),
   site_web VARCHAR(255),
   top_artisan LOGICAL NOT NULL,
   Nom VARCHAR(100) NOT NULL,
   specialite VARCHAR(50) NOT NULL,
   email VARCHAR(100) NOT NULL,
   note DECIMAL(5,1) NOT NULL,
   ville VARCHAR(50) NOT NULL,
   about VARCHAR(255) NOT NULL,
   id_categorie_1 VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_artisan, id_categorie),
   UNIQUE(email),
   FOREIGN KEY(id_categorie_1) REFERENCES Categorie(id_categorie)
);
