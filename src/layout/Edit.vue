<template lang="pug">
  div.full-height
    main-header
    #editor-wrap
      textarea(autofocus @keyup='parseMarkdown' v-model='markdown')
      .preview(v-html='parsed')
</template>





<script>
  import MainHeader from '@/components/header/Main'
  import marked from 'marked'

  export default {
    name: 'layout-edit',

    components: {
      MainHeader
    },

    data () {
      return {
        markdown: '',
        parsed: ''
      }
    },

    methods: {
      parseMarkdown () {
        this.parsed = marked(this.markdown)
      }
    }
  }
</script>



<style lang="sass">
  @import "./src/assets/sass/variables"

  #editor-wrap
    height: 100%
    padding-top: $header-height

    > *
      float: left
      width: 50%
      height: 100%
      overflow: auto

  textarea
    border: none
    resize: none
    outline: none
    padding: $padding-main
    font-family: $font-mono
</style>
