<template>
    <div id="pagination">
        <div class="page" @click="paginationChanger(index)"
        v-for="index in Quiz.length"
        :key="index"
        :class ="{'deselecte': index !== 1}">
            <p class="numero">{{ index }}</p>
        </div>
    </div>
    <p id="titeQuiz">Suis-je un trou d'Bal ?</p>
    
    <div id="image" :style="{opacity: imageOpacity}"></div>
    <div class="ombreSuivant" v-show="boutonSuivant">
        <div class="boutonSuivant">
            <p> Question Suivante</p>
        </div>
    </div>
    <h1 id="question"> {{ question }}  </h1>
    <div class="propositions">
        <div v-for="(reponse, index) in reponses" :key="index">
            <input type="radio" :id="'toggle' + (index+1)" name="reponse">
            <div class="Ombre" 
            :class="{'contourBoutonSelect': reponse.select,'hoverOmbre': !reponse.select}" @click="choisirReponse(index)">
                <div class="bouton" :class="{'boutonSelect': reponse.select}">
                    <label :for="'toggle' + (index+1)" class="propositiontexte">
                    {{ reponse.texte }}
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div>
        <a href="signalement">
            <img src="../../assets/icones/signal3.svg" id="signalement">
        </a>
    </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
//import { pagination } from './Pagination.vue'
//import { paginationChanger} from './Page_module.vue' 
import {tabQuiz, Quiz } from './ObjetQuiz.vue' 
console.log("Question :",Quiz.value[0].question.texte);
console.log("reponses : ", Quiz.value[0].reponses[0].texte, Quiz.value[0].reponses[1].texte, Quiz.value[0].reponses[2].texte, Quiz.value[0].reponses[3].texte);

const reponses = ref(Quiz.value[0].reponses);
const question = ref(Quiz.value[0].question.texte );

const imageOpacity = ref( "1");
const boutonSuivant = ref(false);

function afficherBoutonSuivant(){
    imageOpacity.value = "0.5";
    boutonSuivant.value = true;
}

function resetBool(reponses){
    reponses.forEach(reponse => { reponse.select = false;});
}

function choisirReponse(index){
    resetBool(reponses.value);
    reponses.value[index].select = true;
    afficherBoutonSuivant();
}

//todo 
//Enregistrement dans pinia de la reponse
// pagination 
// dézoomer : fonction qui parcourt l'objet et affichage dynamique pour toutes les questions

</script>

<style scoped lang="css">
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
/*todo:
mettre l'image en dynamique*/
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


/* Quand l'input est coché */
.contourBoutonSelect{
    background-color:rgba(255, 255, 255, 0.368);
    border: 2px solid white ;
    backdrop-filter: blur(10px);
}

.boutonSelect {
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