<template>
  <h1>fetch Pokemon</h1>
  <FetchPokemon_enfant v-for="pokemon in tabPokemon"
      :key="index"
      :name="pokemon.name"
      :url="pokemon.url"
      ></FetchPokemon_enfant>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import FetchPokemon_enfant from './FetchPokemon_enfant.vue' 
const tabPokemon = ref([]);

let callPokemon = async ()=>{
    try{
      const data = await fetch ('https://pokeapi.co/api/v2/pokemon/');
      const dataObject = await data.json();
/*         console.log(dataObject.results, dataObject.results[0].url); */
      tabPokemon.value = dataObject.results;
    } catch(error){
      console.log(error);
    }
}

onMounted(() => {
  callPokemon();
});

onBeforeUnmount(() => {
  console.log("Le composant est sur le point d'être démonté.");
});



onUpdated(() => {
});



</script>

