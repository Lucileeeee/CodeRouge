-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "localPath" TEXT,
    "dateCreation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_image" ("id", "prompt", "url") SELECT "id", "prompt", "url" FROM "image";
DROP TABLE "image";
ALTER TABLE "new_image" RENAME TO "image";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
