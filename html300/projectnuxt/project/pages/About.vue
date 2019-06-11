<template>
  <div class="container">
    
    <nuxt-link to="/">Home</nuxt-link>
    

    <!-- {{ info }} -->

    <h1>Bulbasaur Flow</h1>
    
  <div v-for="poke in info" class="poke">

    <!-- {{ poke.name }}: -->
    <span>
        <span class="evos" v-html="poke.name"></span>
    </span>
  </div>

  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="items.src"></v-carousel-item>
  </v-carousel>
  </div>
  
</template>

<script>
// import Logo from '~/components/Logo.vue'
import axios from 'axios'


export default {
  
  data () {
    return {
      info: null,
      items: [
        {
          src: 'assets/bulbasaur.png'
        },
        {
          src: '../assets/ivysaur.png'
        },
        {
          src: 'venusaur.png'
        }
        
      ]
    }
  },

    

  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=3')
      .then(response => (this.info = response.data.results))
  }

  

}
</script>

<style>
.evos {
  margin: 5px;
  font-size: 15pt;
}

body {
    background-image: url('../assets/bulbasaur.png');
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
