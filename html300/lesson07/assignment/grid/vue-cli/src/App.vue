<template>
  <div id="app">
    <app-header></app-header>

    <router-view></router-view>
    <router-link to="/other">Other</router-link>
    <router-link to="/next">Next</router-link>
    <router-link to="/">Home</router-link>

    <!-- conditional v-if and v-else  -->
    <!-- <p v-if="show">Words</h1>
    <p v-else>wordZ</p>
    <button v-on:click="show = !show"></button> -->

    <blog-post post-title="hello!"></blog-post>
    <blog-post post-title="bye!"></blog-post>
    <blog-post post-title="welcome"></blog-post>

    <div>
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
    </div>

    <app-footer></app-footer>

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

p {
  color: red;
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
