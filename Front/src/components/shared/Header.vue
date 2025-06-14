<template>
    <nav :id="id">
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
import { RouterLink } from 'vue-router'

</script>

<style>
nav{
    width:95%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 10px;
    left: 2.5%;
}
#nav2{
    width:100%;
    position: absolute;
    display: flex;
    gap: 20px;
    justify-content: end;
    top: 25px;
    left: -5%;
}
#iconesCompte, #iconesLogo{
    position: relative;
}
#iconesLogo{
    width: 75px;
    height: 75px;
}
#iconesCompte{
    padding-top: 40px;
    width: 37px;
    height: 37px;
}
#compteBlanc, #compteOrange , #logoBlanc, #logoOrange{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity ease 0.2s;
    transform: scale(0.9);
}
#compteOrange , #logoOrange{
    opacity: 0;
}
#iconesCompte:hover #compteOrange , #iconesLogo:hover #logoOrange{
    opacity: 1;
    cursor: pointer;
}
#iconesCompte:hover #compteBlanc, #iconesLogo:hover #logoBlanc{
    opacity: 0;
}
</style>