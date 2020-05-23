<template lang="pug">
div
  a.link-button(v-if="linkData.targetBlank" :href="linkData.link" target="_blank")
    .link-button__label
      | {{linkData.title}}
    .link-button__icon
  nuxt-link.link-button(v-else :to="linkData.link")
    .link-button__label
      | {{linkData.title}}
    .link-button__icon
</template>

<script>
export default {
  props: {
    linkData: {
      default() {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.link-button {
  display: inline-flex;
  flex-direction: row;
  color: $text-white;
  background: $green-lighten;
  border-radius: 44px;
  padding: 12px 30px;
  box-sizing: border-box;
  &__label {
    font-size: 1.6rem;
    letter-spacing: 0.06em;
    font-weight: 800;
  }
  &__icon {
    width: 14px;
    height: 16px;
    background-image: url(~assets/img/icon/arrow-right.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
