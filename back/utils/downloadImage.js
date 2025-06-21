const axios = require("axios");
const supabase = require("../config/supabase");

async function downloadAndUploadImage(imageUrl, filename) {
  try {
    console.log("1. Téléchargement depuis:", imageUrl);

    // 1. Télécharger l'image en mémoire (buffer)
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");
    console.log("2. Buffer créé, taille:", buffer.length);

    // 2. Upload direct dans Supabase Storage
    console.log("3. Upload vers bucket image-dalle, filename:", filename);

    const { data, error } = await supabase.storage
      .from("image-dalle")
      .upload(filename, buffer, {
        contentType: "image/jpeg",
        upsert: true,
      });
    if (error) {
      console.error("4. Erreur upload:", error);
      throw new Error(`Erreur upload image Supabase : ${error.message}`);
    }
    console.log("5. Upload réussi:", data);
    // 3. Récupérer URL publique
    const {
      data: { publicUrl },
    } = supabase.storage.from("image-dalle").getPublicUrl(filename);
    console.log("6. URL publique générée:", publicUrl);
    return publicUrl;
  } catch (error) {
    console.error("Erreur dans downloadAndUploadImage:", error);
    throw error;
  }
}

module.exports = downloadAndUploadImage;
