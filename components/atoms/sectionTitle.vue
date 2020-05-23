<template lang="pug">
.section-title
  | {{titleData.title}}
</template>

<script>
export default {
  props: {
    titleData: {
      default() {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 3rem;
  letter-spacing: 0.06em;
  line-height: 120%;
  text-align: center;
  @include max-screen($tablet-break-point) {
    font-size: 2.4rem;
  }
}
</style>
