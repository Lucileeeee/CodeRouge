/*
  Warnings:

  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "posts";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "utilisateur" (
    "id_util" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom_util" TEXT NOT NULL,
    "prenom_util" TEXT NOT NULL,
    "mail_util" TEXT NOT NULL,
    "mdp_util" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "role" (
    "id_role" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom_role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "quiz" (
    "id_quiz" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre_quiz" TEXT NOT NULL,
    "disponible_quiz" BOOLEAN NOT NULL DEFAULT true,
    "date_creation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_modification" DATETIME NOT NULL,
    "utilisateur_id" INTEGER NOT NULL,
    CONSTRAINT "quiz_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur" ("id_util") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "question" (
    "id_question" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texte_quest" TEXT NOT NULL,
    "disponible_quest" BOOLEAN NOT NULL DEFAULT true,
    "quiz_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    CONSTRAINT "question_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "quiz" ("id_quiz") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "question_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "response" (
    "id_response" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texte_repon" TEXT NOT NULL,
    "score_repon" REAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    CONSTRAINT "response_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "question" ("id_question") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "resultat" (
    "id_resultat" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre_result" TEXT NOT NULL,
    "description_result" TEXT NOT NULL,
    "resultat_score_min" INTEGER NOT NULL,
    "resultat_score_max" INTEGER NOT NULL,
    "quiz_id" INTEGER NOT NULL,
    "image_id" INTEGER,
    CONSTRAINT "resultat_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "quiz" ("id_quiz") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "resultat_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "utilisateur_resultat" (
    "utilisateur_id" INTEGER NOT NULL,
    "resultat_id" INTEGER NOT NULL,
    "date_passage" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("utilisateur_id", "resultat_id"),
    CONSTRAINT "utilisateur_resultat_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur" ("id_util") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "utilisateur_resultat_resultat_id_fkey" FOREIGN KEY ("resultat_id") REFERENCES "resultat" ("id_resultat") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "prompt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RoleToUtilisateur" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RoleToUtilisateur_A_fkey" FOREIGN KEY ("A") REFERENCES "role" ("id_role") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RoleToUtilisateur_B_fkey" FOREIGN KEY ("B") REFERENCES "utilisateur" ("id_util") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUtilisateur_AB_unique" ON "_RoleToUtilisateur"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUtilisateur_B_index" ON "_RoleToUtilisateur"("B");
