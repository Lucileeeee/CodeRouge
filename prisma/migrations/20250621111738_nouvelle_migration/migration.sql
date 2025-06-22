/*
  Warnings:

  - You are about to drop the column `questionId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `resultatId` on the `Image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageId]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `Resultat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageId` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `Resultat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_resultatId_fkey";

-- DropIndex
DROP INDEX "Image_questionId_key";

-- DropIndex
DROP INDEX "Image_resultatId_key";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "questionId",
DROP COLUMN "resultatId";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "imageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Resultat" ADD COLUMN     "imageId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Question_imageId_key" ON "Question"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Resultat_imageId_key" ON "Resultat"("imageId");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resultat" ADD CONSTRAINT "Resultat_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
