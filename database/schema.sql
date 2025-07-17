/*Création de la base de données Trouve ton artisan*/
/* Créations des Tables*/

-- Table des Categorie
CREATE TABLE Categorie(
   id_categorie INT AUTO_INCREMENT,
   nom VARCHAR(100) NOT NULL,
   PRIMARY KEY(id_categorie),
   UNIQUE(nom)
);


-- Table des Artisan
CREATE TABLE Artisan(
   id_artisan INT AUTO_INCREMENT,
   id_categorie INT NOT NULL,
   site_web VARCHAR(255),
   top_artisan BOOLEAN NOT NULL,
   nom VARCHAR(100) NOT NULL,
   specialite VARCHAR(50) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   note DECIMAL(5,1) NOT NULL,
   ville VARCHAR(50) NOT NULL,
   about VARCHAR(255) NOT NULL,
   PRIMARY KEY(id_artisan),
   FOREIGN KEY(id_categorie) REFERENCES Categorie(id_categorie)
);

