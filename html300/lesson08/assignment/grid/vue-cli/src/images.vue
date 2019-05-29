<template lang="html">
    <div>
        <img v-for="image in images" class="img-thumbnail" :src="image.url" :alt="image.alt"/>
        <!-- <img src='nikolay-tchaouchev-785309-unsplash.jpg'>
        <p>images ples</p> -->
    </div>
</template>


<script>
export default {
//   name: 'app',
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

<style lang="css" scoped>
</style>
