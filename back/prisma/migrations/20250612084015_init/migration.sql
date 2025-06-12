-- CreateTable
CREATE TABLE "utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,

    CONSTRAINT "utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datePassage" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateModification" TIMESTAMP(3) NOT NULL,
    "auteurId" INTEGER NOT NULL,

    CONSTRAINT "quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "texte" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "nbSignalement" INTEGER NOT NULL DEFAULT 0,
    "quizId" INTEGER NOT NULL,
    "imageId" INTEGER,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reponse" (
    "id" SERIAL NOT NULL,
    "texte" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "reponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resultat" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scoreMin" INTEGER NOT NULL,
    "scoreMax" INTEGER NOT NULL,
    "nbSignalement" INTEGER NOT NULL DEFAULT 0,
    "quizId" INTEGER NOT NULL,
    "imageId" INTEGER,

    CONSTRAINT "resultat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "localPath" TEXT,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RoleToUtilisateur" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RoleToUtilisateur_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "utilisateur_email_key" ON "utilisateur"("email");

-- CreateIndex
CREATE INDEX "_RoleToUtilisateur_B_index" ON "_RoleToUtilisateur"("B");

-- AddForeignKey
ALTER TABLE "quiz" ADD CONSTRAINT "quiz_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reponse" ADD CONSTRAINT "reponse_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resultat" ADD CONSTRAINT "resultat_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resultat" ADD CONSTRAINT "resultat_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUtilisateur" ADD CONSTRAINT "_RoleToUtilisateur_A_fkey" FOREIGN KEY ("A") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUtilisateur" ADD CONSTRAINT "_RoleToUtilisateur_B_fkey" FOREIGN KEY ("B") REFERENCES "utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;
