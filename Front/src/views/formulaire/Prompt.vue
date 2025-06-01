<template>
  <section class="prompt-section">
    <h1>Générateur d’image avec DALL·E</h1>

    <form @submit.prevent="handleSubmit">
      <label for="prompt">1) Prompt Image Illustration :</label>
      <p class="explication">
        Décris l’image que tu veux pour illustrer cette question :
      </p>

      <textarea
        id="prompt"
        v-model="prompt"
        placeholder="ex : Une jeune femme dans sa salle de bain se brossant les dents..."
        rows="5"
        cols="50"
        required
      ></textarea>

      <br />
      <button type="submit">Générer</button>
    </form>

    <p v-if="error" class="error-message">{{ error }}</p>

    <div id="image-container">
      <p v-if="loading">Chargement...</p>
      <img v-if="imageUrl" :src="imageUrl" alt="Image générée" width="512" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const prompt = ref("");
const error = ref("");
const imageUrl = ref("");
const loading = ref(false);

const handleSubmit = async () => {
  error.value = "";
  imageUrl.value = "";
  loading.value = true;

  try {
    const response = await fetch("http://localhost:3000/api/test-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt.value }),
    });

    console.log("Response HTTP:", response);
    const data = await response.json();
    console.log("Data JSON:", data);

    if (data.error) {
      error.value = data.error;
    } else if (data.localPath) {
      imageUrl.value = `http://localhost:3000${data.localPath}`;
    } else {
      error.value = "Réponse invalide du serveur.";
    }
  } catch (err) {
    console.error(err);
    error.value = "Erreur lors de la génération de l’image.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

form {
  width: 100%;
  max-width: 600px;
}

textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
  margin-bottom: 1rem;
}

button {
  padding: 0.6rem 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 1rem;
}

#image-container {
  margin-top: 2rem;
}
</style>
