## Installation du projet (première fois)

1. **Cloner le repo :**

```bash
git clone https://github.com/Lucileeeee/CodeRouge.git
cd CodeRouge
```

2. **Installer les dépendances :**
   npm install
3. **Créer le fichier .env à la racine :**
   DATABASE_URL=""
   JWT_SECRET=""
   PORT=
4. **Initialiser la base de données :**
   npx prisma migrate dev --name init

## Lancement du projet (à chaques fois)

5. **Ouvrir Prisma Studio pour visualiser la base :**
   npx prisma studio
6. **Lancer le serveur :**
   npm run dev

## Prisma

1. **Créer une migration :**
   npx prisma migrate dev --name nom-de-la-migration
2. **Synchroniser le client Prisma :**
   npx prisma generate

3. **Réinitialiser la base (⚠️ supprime les données) :**
   npx prisma migrate reset
