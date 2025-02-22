<template>
 <main>
  <h1 id="titreAccueil">
      Création de Quiz
  </h1>
  <div id="contener">
    <p class="introForm">
        Bienvenue dans la création de ton quiz ! Avant de commencer, quelques règles essentielles : assure-toi de respecter les <a href="CGU.php" class="lienUnderline">règles d’utilisation du site </a> et de publier uniquement du contenu approprié : <strong>
        Rien de violent, d’offensant, de sexuelle ou d’illicite.</strong>
    </p>
    <p id="instruction">Voici les étapes qui vont suivre pour créer ton quiz :</p>
    <ol class="listeInstruction">
        <li>Choisis le titre et le sujet</li>
        <li>Décide si ton quiz inclura des images</li>
        <li>Rédige une question (et ajoute une image si tu le souhaites)</li>
        <li>Définis le nombre de réponses possibles pour cette question</li>
        <li>Rédige les propositions de réponse</li>
        <li>Attribue un score à chaque proposition</li>
        <li>Continue d’ajouter des questions en suivant les mêmes étapes pour chacune d’elles</li>
        <li>Crée les résultats du quiz (avec ou sans image)</li>
    </ol>
    <fieldset>
      <form action="" id="formCreationQuestion">
          <label for="titreQuiz">1) Choisis le Sujet, Titre de ton Quiz  :</label>
          <input type="text" placeholder="ex : Êtes-vous un gros crados?" id="titreQuiz">
          <div class="gridBlock">
              <h2 id="propIllu">2) Proposition d'Illustration :</h2>
              <label class="inlineBlock" id="divAvecImage">Avec 
                  <input type="radio" name="choixImage" checked="true"/>
                  <div class="custom-radio"></div>
              </label>
              <label class="inlineBlock" id="divSansImage">Sans
                  <input type="radio" name="choixImage" />
                  <div class="custom-radio"></div>
              </label>
          </div>
          <p class="explication">Quand tu crées une question de quiz, décris l’image que tu veux pour l'illustrer avec dallE. Sois clair et précis : tu n’as droit qu’à un seul essai, et le style visuel est déjà défini. Reste concis et descriptif !</p>
          <label for="question" id="ancreQuestion">3) Première Question : </label>
          <input type="text" name="question" placeholder="ex : A quel fréquence vous brossez-vous les dents ?">
          <label for="promptQuestion">4) Prompt Image Illustration :</label>
          <p class="explication">Décris l’image que tu veux pour illustrer cette question:</p>
          <textarea name="promptQuestion" id="" placeholder="ex : C’est une jeune femme dans sa salle de bain qui se brosse les dents. Elle a les cheveux enrouler dans une serviette et elle porte un peignoire en eponge."></textarea>
          <div class="Ombre hoverOmbre" id="boutonForm">
              <input class="bouton" type="button" value="Envoyer ma Description" id="buttonPromptImage"/>
          </div> 
          <p>Résultat :</p>
          <div id="retourPrompt"></div>
          <h2>5) Choisi le Nombre de Réponses pour cette Question :</h2>
          <div id="gridNbrReponse">
              <div id="radio1">
                  <label class="inlineBlock labelRadio">2 :
                      <input type="radio" name="choixNbrReponse" checked="true"/>
                      <div class="custom-radio"></div>
                  </label>
              </div> 
              <div id="row1">
                  <div class="Ombre">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 1   
                          </p>      
                      </div>
                  </div> 
                  <div class="Ombre">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 2   
                          </p>      
                      </div>
                  </div> 
              </div>
              <div id="row2">
                  <div class="buleOu"> Ou </div>
              </div>
              <div id="radio2">
                  <label class="inlineBlock labelRadio">3 :
                      <input type="radio" name="choixNbrReponse"/>
                      <div class="custom-radio"></div>
                  </label>
              </div>
              <div id="row3">
                  <div class="Ombre">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 1   
                          </p>      
                      </div>
                  </div> 
                  <div class="Ombre">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 2   
                          </p>      
                      </div>
                  </div> 
                  <div class="Ombre" id="row3div3">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 3   
                          </p>      
                      </div>
                  </div>
              </div>
              <div id="row4">
                  <div class="buleOu"> Ou </div>
              </div>
              <div id="radio3">
                  <label class="inlineBlock labelRadio">4 :
                      <input type="radio" name="choixNbrReponse"/>
                      <div class="custom-radio"></div>
                  </label>
              </div>
              <div id="row5">
                  <div class="Ombre" id="row4div4">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 1   
                          </p>      
                      </div>
                  </div> 
                  <div class="Ombre" id="row4div4">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 2   
                          </p>      
                      </div>
                  </div> 
                  <div class="Ombre" id="row4div4">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 3   
                          </p>      
                      </div>
                  </div>
                  <div class="Ombre" id="row4div4">
                      <div class="bouton">
                          <p class="propositiontexte">
                              Réponse 4   
                          </p>      
                      </div>
                  </div>
              </div>
          </div>
          <h2>6) Rédige les réponses et attributs leurs une note :</h2>
          <p class="explication">Si 2 réponses: 1 pour la bonne, 2 pour la mauvaise. Si 3 réponses: 1 pour la bonne, 2 pour la moyenne, 3 pour la mauvaise. Et ainsi de suite pour 4 réponses.</p>
          <div id="gridRedacReponse">
              <div id="redacInput1">
                  <label for="reponse1" class="mediumSize">Réponse 1 :</label>
                  <input type="text" id="reponse1" placeholder="ex: Quand j'y pense, une semaine sur deux">
              </div>
              <div id="redacScore1">
                  <img src="../../assets/icones/Arrow.svg" class="fleche">
                  <div class="score">2</div>
              </div>
              <div id="redacInput2">
                  <label for="reponse1" class="mediumSize">Réponse 2 :</label>
                  <input type="text" id="reponse1" placeholder="ex: 3 fois pas jour, comme le recommende l'OMS">
              </div>
              <div id="redacScore2">
                  <img src="../../assets/icones/Arrow.svg" class="fleche">
                  <div class="score">1</div>
              </div>
          </div>
          <div id="divBoutons">
              <div class="OmbreBlanc hoverOmbreBlanc" id="">
                  <router-link to="/CreationResultat">
                      <input class="boutonBlanc" type="button" value="Rédiger les Résultats" id="boutonRedigerResultat"/>
                  </router-link>
              </div> 
              <div class="Ombre hoverOmbre" id="">
                  <a href="#ancreQuestion">
                      <input class="bouton" type="button" value="Rédiger la Prochaine Question" id=""/>
                  </a>
              </div> 
            </div>
        </form>
    </fieldset>
  </div>
  </main>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="css">
</style>