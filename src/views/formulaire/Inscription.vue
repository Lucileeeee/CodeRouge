<template>
<main>
  <h1 id="titreAccueil">
      Inscription
  </h1>
  <p class="consigne">Veille à remplir tous les champs</p>
  <form method="POST" action="#.php">
      <fieldset>
          <div>
              <label for="prenom">Prénom :</label>
              <input type="text" name="prenom" maxlength="20" minlength="2" id="prenom"/>
          </div>
          <div>
              <label for="nom">Nom :</label>
              <input type="text" name="nom"  maxlength="20" minlength="2" id="nom"/>
          </div>
          <div>
              <label for="email">Mail :</label>
              <input type="email" name="email" id="email"/>
          </div>
          <div>
              <label for="pwd">Mot de passe :</label>
              <input type="password" name="pwd" maxlength="30" minlength="8" id="pwd"/>
          </div>
      </fieldset>
  </form>
  <div class="Ombre hoverOmbre" id="boutonForm">
      <div class="bouton">
          <label for="buton" id="labelForm">
              M'Inscrire      
          </label>      
      </div>
  </div> 
  <p class="redirection">Tu as déjà un compte ? <span><router-link to="/Connexion">Se Connecter</router-link></span></p>
  <!-- Revoir label?? -->
</main>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

</script>

<style scoped lang="css">
</style>