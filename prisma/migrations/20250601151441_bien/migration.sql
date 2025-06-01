/*
  Warnings:

  - You are about to drop the `passage_quiz` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "passage_quiz";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "dateCreation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datePassage" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateModification" DATETIME NOT NULL,
    "auteurId" INTEGER NOT NULL,
    CONSTRAINT "quiz_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_quiz" ("auteurId", "dateCreation", "dateModification", "disponible", "id", "titre") SELECT "auteurId", "dateCreation", "dateModification", "disponible", "id", "titre" FROM "quiz";
DROP TABLE "quiz";
ALTER TABLE "new_quiz" RENAME TO "quiz";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
