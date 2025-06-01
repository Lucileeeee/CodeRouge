<template>
  <footer>
    <p>A Propos</p><p>Mention Légale</p>
  </footer>
</template>

<script setup lang='js'>
//import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'


</script>

<style scoped lang="css">
footer{
    position: absolute;
    color: white;
    display: flex;
    gap: 30px;
    font-size: 1rem;
    bottom:0;
    left:50px;
    letter-spacing: 1px;
    :hover{
        color:#FF6C03;
    }
}

</style>