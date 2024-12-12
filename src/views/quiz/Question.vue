<template>
    <div id="pagination">
        <div class="page"><p class="numero">1</p></div>
        <div class="page deselecte"><p class="numero">2</p></div>
        <div class="page deselecte"><p class="numero">3</p></div>
        <div class="page deselecte"><p class="numero">1</p></div>
        <div class="page deselecte"><p class="numero">1</p></div>
        <div class="page deselecte"><p class="numero">1</p></div>
        <div class="page deselecte"><p class="numero">1</p></div>
        <div class="page deselecte"><p class="numero">1</p></div>
        <div class="page deselecte"><p class="numero">1</p></div>
    </div>
    <div id="image"></div>
    <div class="ombreSuivant suivantHidden">
        <div class="boutonSuivant">
            <p>
                Question Suivante
            </p>
        </div>
    </div>
    <h1 id="question">
        As-tu déjà fais les yeux doux à un.e inconnu.e pendant un rencart avec chéri.e?     
    </h1>
    <div class="propositions">
        <input type="radio" id="toggle1" name="reponse">
        <div class="Ombre hoverOmbre" id="proposition1">
            <div class="bouton">
                <label for="toggle1" class="propositiontexte">
                    Jamais de la vie !  
                </label>
            </div>
        </div> 
        <input type="radio" id="toggle2" name="reponse">
        <div class="Ombre hoverOmbre" id="proposition2">
            <div class="bouton">
                <label for="toggle2" class="propositiontexte">
                    J’avoue le.a serveur.euse la dernière fois...
                </label>
            </div>
        </div> 
        <input type="radio" id="toggle3" name="reponse">
        <div class="Ombre hoverOmbre" id="proposition3">
            <div class="bouton">
                <label for="toggle3" class="propositiontexte">
                    C’est un kink avec ma moitié, nous jugez pas 
                </label> 
            </div>
        </div> 
        <input type="radio" id="toggle4" name="reponse">
        <div class="Ombre hoverOmbre" id="proposition4">
            <div class="bouton">
                <label for="toggle4" class="propositiontexte">
                    Matter juste un cul qui passe c’est pas faire les yeux doux?    
                </label>      
            </div>
        </div> 
    </div>
    <div id="signalement">
        <a href="signalement">
            <img src="../../assets/icones/signal3.svg" id="signalement">
        </a>
    </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

</script>

<style scoped lang="css">
</style>