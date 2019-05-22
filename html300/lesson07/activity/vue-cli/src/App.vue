<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <!-- <button id="button1" onclick="enableButton2()" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Click me first">click me</button>
    <button id="button2" class="btn btn-secondary" disabled data-toggle="tooltip" data-placement="bottom" title="Click 'click me' first">submit</button> -->

    <p v-if="show">Click the other button now</p><button v-on:click="show"></button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

      show: true,
    }
  },
  methods: {
    enableButton2() {
      this.disable = false;
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
