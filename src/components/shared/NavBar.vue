<template>
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Youpi Accueil</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap&family=Asset&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../../style.css">
    </head>

    <nav>
        <div id="iconesLogo">
            <router-link to="/">
                <img src="../../assets/icones/LogoBlanc.svg" id="logoBlanc">
                <img src="../../assets/icones/LogOrange.svg" id="logoOrange">
            </router-link>
        </div>
        <div id="iconesCompte">
            <router-link to="/Inscription">
                <img src="../../assets/icones/CompteBlanc.svg" id="compteBlanc">
                <img src="../../assets/icones/CompteOrange.svg" id="compteOrange">
            </router-link>
        </div>
    </nav>

</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

</script>

<style scoped lang="css">
</style>