## Installation du projet (première fois)

1. **Cloner le repo :**

```bash
git clone <url-du-repo>
cd <nom-du-dossier>

```

2. **Installer les dépendances :**
   npm install

3. **ICréer le fichier .env à la racine :**
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="cbhdjcjzdhcvhzgd"
   PORT=3000

4. **Initialiser la base de données :**
   npx prisma migrate dev --name init

## Lancement du projet (à chaques fois)

5. **Ouvrir Prisma Studio pour visualiser la base :**
   npx prisma studio

6. **Lancer le serveur :**
   npm run dev

## Commandes utiles Prisma

1. **Créer une migration :**
   npx prisma migrate dev --name nom-de-la-migration

2. **Synchroniser le client Prisma :**
   npx prisma generate

3. **Voir la base de données (interface graphique) :**
   npx prisma studio

4. **Réinitialiser la base (⚠️ supprime les données) :**
   npx prisma migrate reset

5. **Modifier le schéma, puis appliquer une migration :**
   npx prisma migrate dev --name modification
