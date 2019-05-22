<template>
  <div id="app">
    <!-- conditional v-if and v-else  -->
    <p v-if="show">Words</h1>
    <p v-else>wordZ</p>
    <button v-on:click="show = !show"></button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show:true,
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
