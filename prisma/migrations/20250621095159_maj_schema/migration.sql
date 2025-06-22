/*
  Warnings:

  - You are about to drop the `_RoleToUtilisateur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reponse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `resultat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `utilisateur` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MODERATOR', 'ADMIN');

-- DropForeignKey
ALTER TABLE "_RoleToUtilisateur" DROP CONSTRAINT "_RoleToUtilisateur_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoleToUtilisateur" DROP CONSTRAINT "_RoleToUtilisateur_B_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_imageId_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_quizId_fkey";

-- DropForeignKey
ALTER TABLE "quiz" DROP CONSTRAINT "quiz_auteurId_fkey";

-- DropForeignKey
ALTER TABLE "reponse" DROP CONSTRAINT "reponse_questionId_fkey";

-- DropForeignKey
ALTER TABLE "resultat" DROP CONSTRAINT "resultat_imageId_fkey";

-- DropForeignKey
ALTER TABLE "resultat" DROP CONSTRAINT "resultat_quizId_fkey";

-- DropTable
DROP TABLE "_RoleToUtilisateur";

-- DropTable
DROP TABLE "image";

-- DropTable
DROP TABLE "question";

-- DropTable
DROP TABLE "quiz";

-- DropTable
DROP TABLE "reponse";

-- DropTable
DROP TABLE "resultat";

-- DropTable
DROP TABLE "role";

-- DropTable
DROP TABLE "utilisateur";

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "mdp" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titre" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "autheurId" INTEGER NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "signalement" INTEGER NOT NULL DEFAULT 0,
    "disponible" BOOLEAN NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    "resultatId" INTEGER NOT NULL,
    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultat" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "resultat_score_min" INTEGER NOT NULL,
    "resultat_score_max" INTEGER NOT NULL,

    CONSTRAINT "Resultat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reponse" (
    "id" SERIAL NOT NULL,
    "text_reponse" TEXT NOT NULL,
    "score_reponse" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Reponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UtilModifierQuiz" (
    "utilisateurId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UtilModifierQuiz_pkey" PRIMARY KEY ("utilisateurId","quizId")
);

-- CreateTable
CREATE TABLE "UtilPasserQuiz" (
    "joueurId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UtilPasserQuiz_pkey" PRIMARY KEY ("joueurId","quizId")
);

-- CreateTable
CREATE TABLE "UtilResultat" (
    "joueurId" INTEGER NOT NULL,
    "resultatId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UtilResultat_pkey" PRIMARY KEY ("joueurId","resultatId")
);

-- CreateTable
CREATE TABLE "_QuestionToQuiz" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_QuestionToQuiz_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_QuestionToReponse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_QuestionToReponse_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ReponseToResultat" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ReponseToResultat_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Image_questionId_key" ON "Image"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_resultatId_key" ON "Image"("resultatId");

-- CreateIndex
CREATE INDEX "_QuestionToQuiz_B_index" ON "_QuestionToQuiz"("B");

-- CreateIndex
CREATE INDEX "_QuestionToReponse_B_index" ON "_QuestionToReponse"("B");

-- CreateIndex
CREATE INDEX "_ReponseToResultat_B_index" ON "_ReponseToResultat"("B");

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_autheurId_fkey" FOREIGN KEY ("autheurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_resultatId_fkey" FOREIGN KEY ("resultatId") REFERENCES "Resultat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilModifierQuiz" ADD CONSTRAINT "UtilModifierQuiz_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilModifierQuiz" ADD CONSTRAINT "UtilModifierQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilPasserQuiz" ADD CONSTRAINT "UtilPasserQuiz_joueurId_fkey" FOREIGN KEY ("joueurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilPasserQuiz" ADD CONSTRAINT "UtilPasserQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilResultat" ADD CONSTRAINT "UtilResultat_joueurId_fkey" FOREIGN KEY ("joueurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UtilResultat" ADD CONSTRAINT "UtilResultat_resultatId_fkey" FOREIGN KEY ("resultatId") REFERENCES "Resultat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToQuiz" ADD CONSTRAINT "_QuestionToQuiz_A_fkey" FOREIGN KEY ("A") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToQuiz" ADD CONSTRAINT "_QuestionToQuiz_B_fkey" FOREIGN KEY ("B") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToReponse" ADD CONSTRAINT "_QuestionToReponse_A_fkey" FOREIGN KEY ("A") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToReponse" ADD CONSTRAINT "_QuestionToReponse_B_fkey" FOREIGN KEY ("B") REFERENCES "Reponse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReponseToResultat" ADD CONSTRAINT "_ReponseToResultat_A_fkey" FOREIGN KEY ("A") REFERENCES "Reponse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReponseToResultat" ADD CONSTRAINT "_ReponseToResultat_B_fkey" FOREIGN KEY ("B") REFERENCES "Resultat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
