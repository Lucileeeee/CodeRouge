const axios = require("axios");
const supabase = require("../config/supabase");

async function downloadAndUploadImage(imageUrl, filename) {
  // 1. Télécharger l'image en mémoire (buffer)
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data, "binary");

  // 2. Upload direct dans Supabase Storage
  const { data, error } = await supabase.storage
    .from("image-dalle")
    .upload(filename, buffer, {
      contentType: "image/jpeg",
      upsert: true,
    });
  if (error) {
    throw new Error(`Erreur upload image Supabase : ${error.message}`);
  }
  // 3. Récupérer URL publique
  const { publicUrl } = supabase.storage
    .from("image-dalle")
    .getPublicUrl(filename);
  return publicUrl;
}

module.exports = downloadAndUploadImage;

/* 
 ?Upload via l’API Supabase (ex: dans ton backend)

const { data, error } = await supabase.storage
  .from('images')
  .upload('nom-image.jpg', fichierBuffer, {
    contentType: 'image/jpeg'
  })
 */
