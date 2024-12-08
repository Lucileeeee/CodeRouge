<template>
<main>
    <h1 id="titreAccueil">
        Connexion
    </h1>
    <p class="consigne">Veille à remplir tous les champs</p>
    <form method="POST" action="#.php">
        <fieldset id="connexion">
            <div>
                <label for="email">Mail :</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div>
                <label for="pwd">Mot de passe :</label>
                <input type="password" name="pwd" router-link to="/ReinitialiserMdp" placeholder="Mot de Passe Oublié ?" maxlength="30" minlength="8" id="pwd"/>
            </div>
        </fieldset>
    </form>
    <div class="Ombre hoverOmbre" id="boutonForm">
        <div class="bouton">
            <label for="buton" id="labelForm">
                Me Connecter   
            </label>      
        </div>
    </div> 
    <!-- revenir mettre un putain d'inpu type buton!!!
        et DANS LE FORM!! -->
    <p class="redirection">Tu n'as pas encore de compte ? <span><router-link to="/Inscription">S'Inscrire</router-link ></span></p>
    <!-- Revoir label?? -->
</main>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

</script>

<style scoped lang="css">
</style>