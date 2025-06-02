<template>
  <section class="prompt-section">
    <h1>4) Prompt Image d'Illustration :</h1>
    <div class="grid">
      <form @submit.prevent="handleSubmit">
        <label for="prompt" class="explication">
          Décris l’image que tu veux pour illustrer cette question :
        </label>
        <textarea
          id="prompt"
          v-model="prompt"
          name="promptQuestion"
          rows="5"
          cols="50"
          required
          placeholder="ex : C’est une jeune femme dans sa salle de bain qui se brosse les dents. Elle a les cheveux enrouler dans une serviette et elle porte un peignoire en eponge."
        ></textarea>
        <div class="Ombre hoverOmbre" id="boutonForm">
          <input
            class="bouton"
            type="submit"
            value="Envoyer ma Description"
            id="buttonPromptImage"
          />
        </div>
      </form>
      <div class="rendu">
        <p>Résultat :</p>
        <p v-if="error" class="error-message">{{ error }}</p>

        <div id="image-container">
          <p v-if="loading">Chargement...</p>
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Image générée"
            width="512"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
}
#boutonForm {
  margin-left: 15%;
  #buttonPromptImage {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
  }
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
form {
  padding-top: 20px;
}
.rendu {
  justify-self: end;
}
textarea {
  border-radius: 20px;
  height: 100px;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.473);
  border: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: medium;
  padding: 10px;
  resize: none;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  line-height: normal;
  margin-top: 30px;
}

.error-message {
  color: red;
  margin-top: 1rem;
}

#image-container {
  background-color: rgba(255, 255, 255, 0.408);
  height: 500px;
  width: 500px;
  margin-top: 2rem;
}
</style>

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
