<template>
  <main>
  <h1 id="titreAccueil">
      Création de Résultats
  </h1>
  <div id="contener">
      <p class="introForm">
          Les résultats sont la touche finale de ton œuvre, ceux qui feront sourire, réfléchir ou surprendre tes participants.
          Voici quelques consignes pour rédiger les résultats:
          <ul>
              <li>Nombre de résultats : Tu peux rédiger entre 2 et 6 résultats différents. Cela te permet de varier les possibilités avec différent niveau de détails selon ton inspiration.</li>
              <li>Classement des résultats : Organise les du meilleur au pire résultat possible. Cette hiérarchie est indisponible pour maintenir une cohérence entre les réponses ét le résultat final.</li>
              <li>Personnalisation : Chaque résultat devrait refléter les réponses et personnalités potentielles des joueurs, avec un ton adapté à l'esprit de ton quiz.</li>
          </ul>
          Amuse-toi bien et crée des résultats qui marqueront les esprits !
      </p>
    </div>
  </main>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="css">
</style>