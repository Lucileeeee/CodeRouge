CREATE DATABASE IF NOT EXISTS YoupiQuiz CHARSET utf8mb4;
USE YoupiQuiz;

CREATE TABLE IF NOT EXISTS utilisateur (
	id_util INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_util VARCHAR(50),
    prenom_util VARCHAR(50),
    mail_util VARCHAR(50) UNIQUE NOT NULL,
    mdp_util VARCHAR(100) NOT NULL,
	id_role INT NOT NULL
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS role (
	id_role INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_role VARCHAR(50) 
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS resultat (
	id_resultat INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    titre_result VARCHAR(100),
    description_result TEXT,
    image_chemin_result VARCHAR(255),
    image_description_result TEXT,
	resultat_score_min INT ,
    resultat_score_max INT 
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS reponse (
	id_reponse  INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    text_repon VARCHAR(100),
	score_repon INT
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS resultat_reponse (
	id_reponse  INT ,
    id_resultat INT,
    PRIMARY KEY (id_reponse,  id_resultat)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS question (
	id_question INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    text_question VARCHAR(100),
    image_chemin_question VARCHAR(255),
    image_description_question TEXT,
	signalement_compteur INT DEFAULT 0,
    disponible_quest TINYINT(1) DEFAULT 0
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS question_reponse (
	id_reponse  INT ,
    id_question INT,
    PRIMARY KEY (id_reponse, id_question)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS quiz (
	id_quiz  INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    titre_quiz VARCHAR(100),
    disponible_quiz TINYINT(1) DEFAULT 0,
    date_creation DATETIME DEFAULT NOW(),
    id_util INT 
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS question_quiz (
	id_quiz  INT ,
    id_question INT,
    PRIMARY KEY (id_quiz, id_question)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS utilisateur_modifier_quiz (
	id_util INT,
    id_quiz  INT ,
    date_modification DATETIME DEFAULT NOW(),
    PRIMARY KEY (id_quiz, id_util)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS utilisateur_passer_quiz (
	id_util INT,
    id_quiz  INT ,
    date_passage DATETIME DEFAULT NOW(),
    PRIMARY KEY (id_quiz, id_util)
)ENGINE = InnoDB;

ALTER TABLE utilisateur ADD CONSTRAINT fk_utilisateur_role FOREIGN KEY (id_role) REFERENCES role(id_role) ON DELETE CASCADE ON UPDATE CASCADE; -- vraiment?
ALTER TABLE quiz ADD CONSTRAINT fk_quiz_utilisateur FOREIGN KEY (id_util) REFERENCES utilisateur(id_util);
