<template>
  <NavBar  :id="$route.meta.navbarId"></NavBar>
    <main>
      <router-view></router-view>
    </main>
  <Footer  v-if="!$route.meta.hideFooter"></Footer>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/shared/NavBar.vue';
import Footer from './components/shared/Footer.vue';


</script>



<style>
body{
  background: linear-gradient(45deg , #C297E3,#C2BCF9 70.71%);
  background-repeat: no-repeat;
  margin:0;
  padding: 0;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: white;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
}
a {
  text-decoration: none;
  color: white;
}
main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
