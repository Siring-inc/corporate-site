<template lang="pug">
.service-header
  .service-header__icon
  .service-header__title
      | {{headerData.title}}
  .service-header__read(v-html="headerData.read")
</template>

<script>
export default {
  props: {
    headerData: {
      default() {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.service-header {
  text-align: center;
  &__icon {
    display: block;
    margin: 0 auto 16px;
    width: 30px;
    height: 30px;
    background-image: url(~assets/img/icon/siring-icon.png);
    background-repeat: no-repeat;
    background-size: contain;
    @include max-screen($mobile-break-point) {
      width: 24px;
      height: 24px;
    }
  }
  &__title {
    font-size: 4rem;
    color: $red;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
    text-align: center;
    @include max-screen($tablet-break-point) {
      font-size: 3.2rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 2.4rem;
    }
  }
  &__read {
    font-size: 2.4rem;
    letter-spacing: 0.08em;
    line-height: 150%;
    color: $orange-darken;
    text-align: center;
    @include max-screen($tablet-break-point) {
      font-size: 1.8rem;
      /deep/ br {
        display: none;
      }
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.6rem;
    }
  }
}
</style>
