//todo liste :

//!1) BDD: revoir les tables d'associations sont pas bonne cf le sql

//! 2) voir limite de caractere pour le prompt et condition dans le middlewar/image et bdd cohérente

/* ?
Controller (controllers/ImageController.js)

generate() : Génère une nouvelle image en utilisant votre service test-chat
getAll() : Récupère toutes les images
getById() : Récupère une image par son ID
getMyImages() : Récupère les images de l'utilisateur connecté
delete() : Supprime une image (avec vérification de propriété)

Middleware (middleware/imageMiddleware.js)

validateImageGeneration : Valide le prompt (longueur, type, etc.)
checkImageOwnership : Vérifie que l'utilisateur est propriétaire de l'image
rateLimitGeneration : Limite le nombre de générations par heure (optionnel)
validateImageParams : Valide les paramètres d'URL

Routes (routes/imageRoutes.js)
Structure identique à vos routes de posts avec :

Routes publiques d'abord
Routes spécifiques protégées ensuite
Routes avec paramètres en dernier
*/

/*
? 1) a quoi sert le middleware? quel equivalent en mvc php
? Il est souvent utilisé pour :
? l’authentification
? la vérification de jetons JWT
? la journalisation (logs)
? le parsing (body-parser, json, etc.)
? la gestion d’erreurs globales

/routes        → définit les routes
/controllers  → contient la logique métier (fonctions déclenchées par les routes)
/models       → gère la base de données (via ORM ou requêtes)
/middleware   → contient les fonctions intermédiaires réutilisables utils??

routes/	Dirige les requêtes vers les bons contrôleurs
controllers/	Gère la logique métier + erreurs
middleware/	Filtre les accès et valide les données


utils/downloadImage.js
→ Contient la fonction utilitaire réutilisable downloadImage().

services/test-chat.js
→ Appelle l'API de DALL·E, utilise downloadImage() pour sauvegarder l'image générée.
→ Renvoie les deux chemins : l'url (vers DALL·E) et le localPath (dans ton serveur).

routes/index.js (ou routes/)
→ Appelle testChat() quand une requête POST est envoyée, et renvoie le résultat à ton frontend.
 */
