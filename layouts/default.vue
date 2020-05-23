<template lang="pug">
div.layout
  globalHeader.layout__header(:scrollY="scrollY")
  nuxt.layout__main
  globalFooter.layout__footer
</template>

<script>
import globalHeader from '~/components/organisms/globalHeader'
import globalFooter from '~/components/organisms/globalFooter'

export default {
  components: {
    globalHeader,
    globalFooter
  },
  data() {
    return {
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // eslint-disable-next-line object-shorthand
    handleScroll: function() {
      this.scrollY = window.scrollY || window.pageYOffset
      if (this.scrollY > 800) {
        this.scrollStatus = true
      } else {
        this.scrollStatus = false
      }
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  font-family: 'M PLUS Rounded 1c', 'Hiragino Kaku Gothic Pro',
    'ヒラギノ角ゴ Pro W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial,
    helvetica, sans-serif;
}
body {
  font-size: 1.4rem;
}
</style>
