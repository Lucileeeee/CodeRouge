<template>
  <div class="grid">
    <div class="rendu">
      <p>Titre du Quiz</p>
      <p v-if="error" class="error-message">{{ messageError }}</p>
      <div id="image-container">
        <p v-if="loading">Ça arrive, sois patient.e ...</p>
        <img
          v-if="imageUrl"
          :src="imageUrl"
          alt="Image générée"
          width="245"
          height="245"
        />
      </div>
    </div>
    <div class="col-2">
      <div id="pagination">
        <div
          class="page"
          v-for="(etape, index) in formStapes"
          :key="index"
          @click="paginationChanger(index)"
          :class="{ deselecte: index !== currentStape }"
        >
          <p class="numero">{{ index + 1 }}</p>
        </div>
      </div>
      <form @submit.prevent="envoyerForm">
        <label for="prompt" class="explication">
          3 - Prompt Image Illustration
        </label>
        <textarea
          id="prompt"
          v-model="prompt"
          name="promptQuestion"
          :disabled="loading"
          rows="5"
          cols="50"
          required
          placeholder="ex : C’est une jeune femme dans sa salle de bain qui se brosse les dents. Elle a les cheveux enrouler dans une serviette et elle porte un peignoire en eponge."
        ></textarea>
        <div
          class="Ombre hoverOmbre"
          id="boutonForm"
          v-if="!imageGenerated && !loading"
        >
          <input
            :disabled="loading"
            class="bouton"
            type="submit"
            value="Envoyer ma Description"
            id="buttonPromptImage"
          />
        </div>
      </form>
      <div v-if="imageGenerated" class="Ombre hoverOmbre next">
        <button @click="goToNextStep" class="bouton" type="button">
          Étape suivante
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const formStapes = ref(7);
const prompt = ref("");
const messageError = ref("");
const imageUrl = ref("");
const loading = ref(false);
const imageGenerated = ref(false);

let currentStape = ref(2);

const envoyerForm = async () => {
  messageError.value = "";
  imageUrl.value = "";
  loading.value = true;

  try {
    const response = await fetch("http://localhost:3000/api/image/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt.value }),
    });
    const data = await response.json();
    console.log("data: ", data);
    if (data.error) {
      messageError.value = data.error;
    } else if (data.success && data.data.dalleUrl) {
      imageUrl.value = data.data.dalleUrl;
      imageGenerated.value = true;
    } else {
      messageError.value = "problème de connexion avec le serveur.";
    }
  } catch (err) {
    console.error(err);
    messageError.value = "problème de connexion à l'api.";
  } finally {
    loading.value = false;
  }
};
</script>
<!-- todo
1) il faut que la fonction soit enclencher au click sur le bouton, pas des qu'on tape dans l'input, 
2) le bouton doit disparaitre, pas juste desabled dès qu'on click et qu'on envoi le prompt, pas quand on reçoit la réponse
3) set time out et texte qui change pour dire oui je sais mais tkt vraiment ça arrive

-->
<style scoped>
.col-2 {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  gap: 90px;
  margin-right: 5%;
}
.next {
  grid-column: 2;
}
#pagination {
  height: 200px;
  min-width: 38px;
  background-color: rgba(255, 255, 255, 0.236);
  border-radius: 50px;
  border: 1.5px solid white;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.674) rgba(255, 255, 255, 0.024);
  padding-block: 20px;
  .page {
    background-image: url("./src/assets/icones/page2.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 37px;
    width: 18.47px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    :hover {
      cursor: pointer;
    }
    .numero {
      font-size: smaller;
    }
  }
}
.deselecte {
  opacity: 0.4;
}
#boutonForm {
  justify-self: center;
  #buttonPromptImage {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
  }
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 135px;
}

.rendu {
  justify-self: center;
  text-align: center;
}
textarea {
  border-radius: 20px;
  height: 100px;
  width: 410px;
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
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 1rem;
}

#image-container {
  background-color: rgba(255, 255, 255, 0.408);
  height: 245px;
  width: 245px;
  border-radius: 3px;
  overflow: hidden;
}
</style>
