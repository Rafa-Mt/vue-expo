<script setup>
import logo from "@/assets/logo.svg"
import uruLogo from '@/assets/uru-logo.png'
import GridSquare from '@/components/GridSquare.vue'
// import Reactividad from '../components/slides/Reactividad/Slide.mdx'



</script>

<template>
  <main>
    <div class="logos">
      <a href="https://vuejs.org/guide" class="img-link" target="_blank">
        <img :src="logo" alt="Vue logo">
      </a>
      <a href="https://uru.edu" class="img-link" target="_blank">
        <img :src="uruLogo" alt="URU logo">
      </a>
    </div>
    <div class="content">
      <h1>VueJS en 4 horas</h1>
      <p>Por Tomas Santana, Marlon Urdaneta, Rafael Mata, Andres Garcia, Juan Gil, y Jose Carrillo</p>
    </div>
    <div class="rapid-guides">
      <h2>Guias Rapidas</h2>
      <div class="squares">
        <GridSquare path="/installation" name="Slides" color="#42b883" class="grid-1" />
        <GridSquare path="/installation" name="Instalacion" color="#35495e"  class="grid-2"/>
        <GridSquare path="/installation" name="Vue 3" color="#41b883" class="grid-3"/>
        <GridSquare path="/installation" name="Vue 3" color="#126352" class="grid-4" />
        <GridSquare path="/installation" name="Vue 3" color="#126352" class="grid-5" />
        <GridSquare path="/installation" name="Vue 3" color="#126352" class="grid-6" />

      </div>
    </div>
    <Reactividad />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    
  }
  .logos {
    display: flex;
    gap: 50px;
  }
  .logos img {
    height: 90px;
    animation: rotate 5s linear infinite;

  }
  .content {
    text-align: center;
  }
  .rapid-guides {
    width: 70%;
    padding: 20px;
    
  }
  @media screen and (max-width: 768px){
    .rapid-guides {
      width: 100%;
    } 
  }
  .squares {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .grid-1 {
    grid-column: 1 / 3;
  }
  .grid-2 {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }
  .grid-3 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  .grid-4 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .grid-5 {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  .grid-6 {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
    
  }
</style>
