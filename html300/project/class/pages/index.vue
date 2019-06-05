<template lang="html">
 <div>
   <h1>Pokemanz</h1>
   
    <nav>
      
    </nav>
   <nuxt-link to="/about">About</nuxt-link>
 </div>
</template>

<script>
import navbar from '@/components/navbar'
import axios from 'axios'


// var request = new pokerequest ()
// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/' true)
// request.onload = function () {

// }
// request.send()

// var data = JSON.parse(this.response)
// data.forEach(poke => {
//   console.log(pokemon.title)
// })

export default {
  components: {
    navbar
  },
 data() {
   return {
     test: "Hello"
   }
 },
 created: function() {
   //http://www.omdbapi.com/?apikey=90fcc7de&t=2018
  //  this.test = "Hello Again one More time";
   axios.get(` https://pokeapi.co/api/v2/pokemon/`)
   .then(response => {
     // JSON responses are automatically parsed.
     this.posts = response.data
     console.log(this.posts);
   })
   .catch(e => {
     this.errors.push(e)
   })
   .finally(() => this.loading =true)
 },
 methods: {
   greet: function() {
     this.test = "Hello Again";
   }
 }
}
</script>

<style lang="css" scoped>
</style>