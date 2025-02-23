<template>
<main>
  <h1 id="titreAccueil">
      Inscription
  </h1>
  <p class="consigne"> {{ messageUtilisateur }} </p>
  <form method="POST" action="#.php">
      <fieldset>
          <div>
              <label for="prenom">Prénom :</label>
              <input type="text" name="prenom" maxlength="20" minlength="2" id="prenom"
              v-on:keyup="remplirForm($event)"/>
          </div>
          <div>
              <label for="nom">Nom :</label>
              <input type="text" name="nom"  maxlength="20" minlength="2" id="nom"
              v-on:keyup="remplirForm($event)"/>
          </div>
          <div>
              <label for="email">Mail :</label>
              <input type="email" name="mail" id="email"
              v-on:keyup="remplirForm($event)"/>
          </div>
          <div>
              <label for="pwd">Mot de passe :</label>
              <input type="password" name="mdp" maxlength="30" minlength="8" id="pwd"
              v-on:keyup="remplirForm($event)"/>
          </div>
          <div class="Ombre hoverOmbre" id="boutonForm"
            v-on:click="envoyerForm($event)">
                <div class="bouton">
                    <input type="submit" name="submit">
                    <label for="buton" id="labelForm">
                        M'Inscrire      
                    </label>      
                </div>
            </div> 
      </fieldset>
  </form>

  <p class="redirection">Tu as déjà un compte ? <span><router-link to="/Connexion">Se Connecter</router-link></span></p>
  <!-- Revoir label?? -->
</main>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

let form = ref({
    prenom : '',
    nom : '',
    mail : '',
    mdp : ''
});

let messageUtilisateur = ref('Veille à remplir tous les champs');

function remplirForm(event){
    form.value[event.target.name] = event.target.value;
}
function envoyerForm(event){
    console.log(form.value);
    fetch('http://localhost:8888/cda/rougeApi/model/PostUtilisateur.php',{
        method : "POST",
        credentials: 'include',
        body : JSON.stringify(form.value)
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    //todo .then(messageUtilisateur.value = data.message);
}


</script>

<style scoped lang="css">
#boutonForm{
    margin-top: 40px;
}
input[ type="submit"]{
    display:none;
}
</style>