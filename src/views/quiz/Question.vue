<template>
    <div id="pagination">
        <div class="page"
        v-for="index in tabQuiz.length"
        :key="index"
        :class ="{'deselecte': index !== 1}">
            <p class="numero">{{ index }}</p>
        </div>
    </div>
    <p id="titeQuiz">Suis-je un trou d'Bal ?</p>
    
    <div id="image" :style="{opacity: imageOpacity}"></div>
    <div class="ombreSuivant" v-show="boutonSuivant">
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
        <input type="radio" id="toggle1" name="reponse" >
        <div class="Ombre" :class ="{'inputCheckedOmbre' : select1, 'hoverOmbre': !select1}" id="proposition1" @click="affichageChanger(1)">
            <div class="bouton" :class="{'inputCheckedBouton' :select1}">
                <label for="toggle1" class="propositiontexte">
                    Jamais de la vie !  
                </label>
            </div>
        </div>  
        <input type="radio" id="toggle2" name="reponse">
        <div class="Ombre" :class ="{'inputCheckedOmbre' : select2, 'hoverOmbre': !select2}" id="proposition2" @click="affichageChanger(2)">
            <div class="bouton" :class="{'inputCheckedBouton' : select2}">
                <label for="toggle2" class="propositiontexte">
                    J’avoue le.a serveur.euse la dernière fois...
                </label>
            </div>
        </div> 
        <input type="radio" id="toggle3" name="reponse">
        <div class="Ombre" :class ="{'inputCheckedOmbre' : select3, 'hoverOmbre': !select3}" id="proposition3" @click="affichageChanger(3)">
            <div class="bouton" :class="{'inputCheckedBouton' : select3}">
                <label for="toggle3" class="propositiontexte">
                    C'est un kink avec ma moitié, nous jugez pas  
                </label> 
            </div>
        </div> 
        <input type="radio" id="toggle4" name="reponse">
        <div class="Ombre" :class ="{'inputCheckedOmbre' : select4, 'hoverOmbre': !select4}" id="proposition4" @click="affichageChanger(4)">
            <div class="bouton" :class="{'inputCheckedBouton' : select4}">
                <label for="toggle4" class="propositiontexte">
                    Mattez juste un cul qui passe c'est pas faire les yeux doux?    
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
import { ref } from 'vue'
import pagination from './Pagination.vue' 
import {tabQuiz, tableauQuiz } from './ObjetQuiz.vue' 


const imageOpacity = ref( "1");
const boutonSuivant = ref(false);
const select1 = ref(false);
const select2 = ref(false);
const select3 = ref(false);
const select4 = ref(false);

function resetBool(){
    select1.value = false;
    select2.value = false;
    select3.value = false;
    select4.value = false; 
}

function afficherBoutonSuivant(){
    imageOpacity.value = "0.5";
    boutonSuivant.value = true;
}

function affichageChanger(uneCard){
    resetBool();
    if(uneCard === 1){
        select1.value = !select1.value;
    } else if (uneCard === 2){
        select2.value = !select2.value;
    }else if (uneCard === 3){
        select3.value = !select3.value;
    }else if (uneCard === 4){
        select4.value = !select4.value;
    }
    console.log(select1.value, select2.value, select3.value, select4.value);
    afficherBoutonSuivant();
}

</script>

<style scoped lang="css">
/* todo: 
curser pointer sur class bouton pas sur hover -> donner à bouton suivant 
*/

#pagination{
    position:absolute;
    left: 6%;
    top:45px;
    height: 190px;
    width: 45px;
    background-color: rgba(255, 255, 255, 0.236);
    border-radius: 50px;
    border: 1.5px solid white;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:40px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.674) rgba(255, 255, 255, 0.024);
    padding-block: 20px;
    .page{
        background-image: url('./src/assets/icones/page2.svg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 37px;
        width: 18.47px;
        display:flex;
        justify-content: center;
        align-items: center;
        color: white;
        :hover {
            cursor: pointer;
        }
        .numero{
            font-size: smaller;
        }
    }
}
.deselecte{
    opacity: 0.4;
}
#question{
    font-size: 1.4rem;
    text-align: start;
    margin-bottom: 30px;
}
#titeQuiz{
    margin-bottom: 0;
}
#image{
    height:320px;
    width:320px;
    background-image: url('./src/assets/Images_DallE/yeux_doux.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.ombreSuivant{
    width: 320px;
    height: 70px;
    background-color:rgba(255, 255, 255, 0.368);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    /* margin-top: 30px; */
    border: 2px solid white ;
    opacity: normal;
    backdrop-filter: blur(10px);
    position: absolute;
    top:25%;
}
.boutonSuivant{
    height: 60px;
    width: 280px;
    border-radius: 50px;
    background-color:rgba(255, 255, 255, 0.79); 
    color:#FF6C03;
    letter-spacing: 2px;
    font-weight: 500;
    letter-spacing: 0.1rem;
    border: 1px solid #FF6C03;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    p{
        font-size: 1.1rem;
        font-weight: 500;
    }
}
.boutonSuivant:hover{
    cursor: pointer;
}
.suivantHidden{
    display:none;
}
 /* Masquer l'input */
input[type="radio"] {
    display: none;
}
/*
- passer en class les style checked et normal
- action au click vue*/

/* Appliquer les styles quand l'input est coché */
.inputCheckedOmbre{
    background-color:rgba(255, 255, 255, 0.368);
    border: 2px solid white ;
    backdrop-filter: blur(10px);
}

.inputCheckedBouton {
    background-color:rgba(255, 255, 255, 0.79); 
    color:#FF6C03;
    border: 1px solid #FF6C03;
}


.propositions{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2;
    width: 800px;
    height: 180px;
}
#proposition1{
    grid-column: 1;
    grid-row: 1;
}
#proposition2{
    grid-column: 2;
    grid-row: 1;
    margin-left: 40px;
}
#proposition3{
    grid-column: 1;
    grid-row: 2;
}
#proposition4{
    grid-column: 2;
    grid-row: 2;
    margin-left: 40px;
}

.propositiontexte{
    max-width: 260px;
    font-size: 1rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    text-align: center;
}

input[type="radio"] {
    display: none;
}
#signalement{
    height:30px;
    width: 30px;
    position: absolute;
    bottom: 2%;
    right: 5%;
}
#signalement:hover {
    cursor: pointer;
}
</style>