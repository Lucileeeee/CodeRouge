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
                <input type="email" name="mail" id="email" 
                v-on:keyup="remplirForm($event)"/>
            </div>
            <div>
                <label for="pwd">Mot de passe :</label>
                <input type="password" name="mdp" router-link to="/ReinitialiserMdp" placeholder="Mot de Passe Oublié ?" maxlength="30" minlength="8" id="pwd"
                v-on:keyup="remplirForm($event)">
            </div>

        <div class="Ombre hoverOmbre" id="boutonForm">
        <input type="submit" name="submit">
        <div class="bouton"
        @:click="envoyerFormCo()">
            <!-- <label for="submit" id="labelForm"> -->
                <router-link :to="disabled  ? '' : '/CompteUtil'">
                    Me Connecter 
                </router-link>  
        <!--     </label>  -->     
        </div>
    </div> 
        </fieldset>
    </form>
    
    <p class="redirection">Tu n'as pas encore de compte ? <span><router-link to="/Inscription">S'Inscrire</router-link ></span></p>
    <!-- Revoir label?? -->
</main>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

let formCo = ref({
    mail :'',
    mdp :''
})

let disabled = ref(true);
let dataCul = ref({});

function remplirForm(event){
    formCo.value[event.target.name] = event.target.value;
    console.log(disabled.value);
}

function envoyerFormCo(){
    console.log(formCo.value);
    fetch('http://localhost:8888/cda/rougeApi/model/CoUtilisateur.php',{
        method : "POST",
        //credentials: 'include',
        body : JSON.stringify(formCo.value)
    })
    .then(response => response.json())
    .then(data => console.log(data.codeHTTP))
    dataCul.value = data;
}
   // )
    //todo router dispo seulement si data.code = 200
    //todo .then(messageUtilisateur.value = data.message);

if(dataCul.codeHTTP === 200){
    disabled.value = false;
    console.log(disabled.value)
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