<template>
<main>
  <h1 id="titreIntro">
      Suis-Je un Trou d'Bal?
  </h1>
  <p class="intro">Disclaimer Âme sensible: <br>
      On est pas venu ici pour souffrir, ok? Alors prends une grande inspiration et oublie le sérieux un instant. <br>
      Que tu sois là par curiosité, parce qu'on t'as recommandé le quiz, ou juste pour rigoler, on te promet un bon moment ! <br>
      Cette expérience, pensée avant tout pour te divertir, pourrait aussi t'inviter à  regarder un peu plus en toi... 
      Garde cependant en tête que l'objectif c'est un max de fun, alors ne prend pas les résultats trop à coeur. <br>
      Prêt.e à découvrir si tu es une grosse de-mer ?  </p>

  <div class="overlayInscription"></div>
  <div class="Ombre grosBouton hoverOmbre">
      <div class="bouton">
          <p>
              <router-link to="/Question">Et Zééé Partie !</router-link>
          </p>
      </div>
  </div>
</main>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="css">
</style>