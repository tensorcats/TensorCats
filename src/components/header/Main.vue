<template lang="pug">
  header
    .container
      router-link.logo(to='/')
        img(src='static/img/favicon.png' height=48)
        | TensorCats
</template>





<script>
  export default {
    name: 'main-header'
  }
</script>





<style lang="sass">
  @import "./src/assets/sass/variables"

  header
    box-shadow: $box-shadow-1
    position: absolute
    width: 100%
    height: $header-height

  .logo
    font-size: 1.5rem
    letter-spacing: 1px
    font-family: $font-serif
    text-decoration: none
    color: $color-heading
    font-weight: 900

    img
      vertical-align: middle
      margin-right: $margin-main
</style>
