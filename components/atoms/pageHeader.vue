<template lang="pug">
.page-header
  .page-header__title(v-html="titleData.title" :class="{'page-header__title--small': isSmall}")
  .page-header__desc(v-if="titleData.desc" v-html="titleData.desc")
</template>

<script>
export default {
  props: {
    titleData: {
      default() {
        return {}
      },
      type: Object
    },
    isSmall: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  &__title {
    font-size: 4rem;
    letter-spacing: 0.08em;
    line-height: 140%;
    color: $green-lighten;
    text-align: center;
    font-weight: 800;
    @include max-screen($tablet-break-point) {
      font-size: 3rem;
      /deep/ br {
        display: none;
      }
    }
    @include max-screen($mobile-break-point) {
      font-size: 2.4rem;
    }
    &--small {
      font-size: 3rem;
      @include max-screen($tablet-break-point) {
        font-size: 2.2rem;
      }
      @include max-screen($mobile-break-point) {
        font-size: 1.8rem;
      }
    }
  }
  &__desc {
    font-size: 1.6rem;
    text-align: center;
    line-height: 160%;
    letter-spacing: 0.04em;
    font-weight: 400;
    margin-top: 30px;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
      text-align: left;
      /deep/ .br {
        display: none;
      }
    }
  }
}
</style>
