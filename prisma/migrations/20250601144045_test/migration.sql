/*
  Warnings:

  - You are about to drop the `response` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `utilisateur_resultat` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `disponible_quest` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `id_question` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `image_id` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_id` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `texte_quest` on the `question` table. All the data in the column will be lost.
  - The primary key for the `quiz` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date_creation` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `date_modification` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `disponible_quiz` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `id_quiz` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `titre_quiz` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `utilisateur_id` on the `quiz` table. All the data in the column will be lost.
  - The primary key for the `resultat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description_result` on the `resultat` table. All the data in the column will be lost.
  - You are about to drop the column `id_resultat` on the `resultat` table. All the data in the column will be lost.
  - You are about to drop the column `image_id` on the `resultat` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_id` on the `resultat` table. All the data in the column will be lost.
  - You are about to drop the column `resultat_score_max` on the `resultat` table. All the data in the column will be lost.
  - You are about to drop the column `resultat_score_min` on the `resultat` table. All the data in the column will be lost.
  - You are about to drop the column `titre_result` on the `resultat` table. All the data in the column will be lost.
  - The primary key for the `role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_role` on the `role` table. All the data in the column will be lost.
  - You are about to drop the column `nom_role` on the `role` table. All the data in the column will be lost.
  - The primary key for the `utilisateur` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_util` on the `utilisateur` table. All the data in the column will be lost.
  - You are about to drop the column `mail_util` on the `utilisateur` table. All the data in the column will be lost.
  - You are about to drop the column `mdp_util` on the `utilisateur` table. All the data in the column will be lost.
  - You are about to drop the column `nom_util` on the `utilisateur` table. All the data in the column will be lost.
  - You are about to drop the column `prenom_util` on the `utilisateur` table. All the data in the column will be lost.
  - Added the required column `id` to the `question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizId` to the `question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `texte` to the `question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `auteurId` to the `quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateModification` to the `quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titre` to the `quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `resultat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `resultat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizId` to the `resultat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scoreMax` to the `resultat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scoreMin` to the `resultat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titre` to the `resultat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom` to the `role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `utilisateur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `utilisateur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motDePasse` to the `utilisateur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom` to the `utilisateur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prenom` to the `utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "response";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "utilisateur_resultat";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "reponse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texte" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    CONSTRAINT "reponse_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "passage_quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "dateCreation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datePassage" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateModification" DATETIME NOT NULL,
    "scoreObtenu" REAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "resultatId" INTEGER NOT NULL,
    CONSTRAINT "passage_quiz_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "passage_quiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "passage_quiz_resultatId_fkey" FOREIGN KEY ("resultatId") REFERENCES "resultat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__RoleToUtilisateur" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RoleToUtilisateur_A_fkey" FOREIGN KEY ("A") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RoleToUtilisateur_B_fkey" FOREIGN KEY ("B") REFERENCES "utilisateur" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__RoleToUtilisateur" ("A", "B") SELECT "A", "B" FROM "_RoleToUtilisateur";
DROP TABLE "_RoleToUtilisateur";
ALTER TABLE "new__RoleToUtilisateur" RENAME TO "_RoleToUtilisateur";
CREATE UNIQUE INDEX "_RoleToUtilisateur_AB_unique" ON "_RoleToUtilisateur"("A", "B");
CREATE INDEX "_RoleToUtilisateur_B_index" ON "_RoleToUtilisateur"("B");
CREATE TABLE "new_question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texte" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "nbSignalement" INTEGER NOT NULL DEFAULT 0,
    "quizId" INTEGER NOT NULL,
    "imageId" INTEGER,
    CONSTRAINT "question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "question_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
DROP TABLE "question";
ALTER TABLE "new_question" RENAME TO "question";
CREATE TABLE "new_quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "dateCreation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateModification" DATETIME NOT NULL,
    "auteurId" INTEGER NOT NULL,
    CONSTRAINT "quiz_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "quiz";
ALTER TABLE "new_quiz" RENAME TO "quiz";
CREATE TABLE "new_resultat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scoreMin" INTEGER NOT NULL,
    "scoreMax" INTEGER NOT NULL,
    "nbSignalement" INTEGER NOT NULL DEFAULT 0,
    "quizId" INTEGER NOT NULL,
    "imageId" INTEGER,
    CONSTRAINT "resultat_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "resultat_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
DROP TABLE "resultat";
ALTER TABLE "new_resultat" RENAME TO "resultat";
CREATE TABLE "new_role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);
DROP TABLE "role";
ALTER TABLE "new_role" RENAME TO "role";
CREATE TABLE "new_utilisateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL
);
DROP TABLE "utilisateur";
ALTER TABLE "new_utilisateur" RENAME TO "utilisateur";
CREATE UNIQUE INDEX "utilisateur_email_key" ON "utilisateur"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
