<template>
 <h1 id="titreAccueil">
    YOUPI
</h1>
<p class="intro">Youpi Quiz offre un espace fun, <strong>d'introspection et de créativité.</strong><br>
    Que tu sois ici pour <strong>te divertir ou découvrir
    de nouvelles facettes de ta personnalité </strong>
    il y a toujours <strong>un quiz fendard </strong>qui t'attend. <br> 
    Youpi Quiz est aussi un endroit où <strong>la création de quiz devient
    amusante et accessible à tous !</strong><br>
    Tu peux créer des quiz de personnalité très facilement (et 
    même les illustrer pour quelques deniers) en suivant les étapes guidés. <br>
    <strong>À toi de jouer, que ce soit en passant ou en créant des quiz!</strong></p>
<div class="overlayInscription"></div>
<div class="Ombre grosBouton hoverOmbre">
    <div class="bouton ">
        <p>
            <router-link to="/IntroQuiz">Passe le Quiz</router-link>
        </p>
    </div>
</div>
<div class="Ombre grosBouton hoverOmbre">
    <div class="bouton">
        <p><router-link to="/CreationQuestion">Créer ton Quiz</router-link></p>
    </div>
</div>
</template>





<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

</script>

<style scoped lang="css"></style>