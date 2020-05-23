<template lang="pug">
  footer.footer
    .footer__wrap
      .footer__nav
        globalNav(:isWhite="true" :isSmall="true")
      .footer__content
        .footer__left
          .footer__logo
            img(src="~assets/img/logo/logo-white.png" alt="株式会社シリング")
          .footer__address
            | 〒564-0063
            br
            | 大阪府吹田市江坂町1-14-33 TCSビル６F
        .footer__right
          small.footer__copy
            | Copyright © 2017   Siring   All Rights Reserved.
</template>

<script>
import globalNav from '~/components/molecules/globalNav'

export default {
  components: {
    globalNav
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: $green-lighten;
  padding: 40px 0 25px;
  box-sizing: border-box;
  &__wrap {
    @include limitter;
    @include max-screen($tablet-break-point) {
      padding: 0;
    }
  }
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    @include max-screen($tablet-break-point) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
  &__left {
    display: flex;
    flex-direction: row;
    @include max-screen($tablet-break-point) {
      flex-direction: column;
      width: 100%;
    }
  }
  &__right {
    @include max-screen($tablet-break-point) {
      width: 100%;
    }
  }
  &__nav {
    text-align: center;
    margin-bottom: 40px;
  }
  &__logo {
    display: inline-block;
    height: 36px;
    margin-right: 20px;
    @include max-screen($tablet-break-point) {
      margin-right: 0;
      margin-bottom: 20px;
    }
    img {
      display: block;
      height: 100%;
      width: auto;
      @include max-screen($tablet-break-point) {
        margin: auto;
      }
    }
  }
  &__address {
    font-size: 1.4rem;
    color: $text-white;
    letter-spacing: 0.06em;
    line-height: 160%;
    @include max-screen($tablet-break-point) {
      margin-bottom: 40px;
    }
  }
  &__copy {
    font-size: 1rem;
    color: $text-white;
    @include max-screen($tablet-break-point) {
      text-align: center;
    }
  }
}
</style>
