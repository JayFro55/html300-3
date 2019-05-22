<template>
  <div id="app">
    <!-- Trying to use bootstrap to make images responsive -->
    <img v-for="image in images" class="img-thumbnail" :src="image.url" :alt="image.alt"/>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // vfor image array
      images: [
        {url: 'nikolay-tchaouchev-785309-unsplash.jpg', alt: 'snoop'},
        {url: 'tucker-good-589776-unsplash.jpg', alt: 'doggy dog'}
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
