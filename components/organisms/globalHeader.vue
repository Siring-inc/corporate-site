<template lang="pug">
  .global-header
    .global-header__wrap
      .global-header__inner
        nuxt-link.global-header__logo(to="/")
          img(src="~assets/img/logo/logo.png" alt="株式会社シリング")
        .global-header__info
          .company-info
            .company-info__left
              .company-info__address
                | 〒530-0041
                br
                | 大阪市北区天神橋2丁目北2-25 タキガワビル306号
            .company-info__right
              .company-tell
                .company-tell__item
                  .tell
                    .tell__label
                      | TEL
                    .tell__number
                      | 06-6949-8303
                .company-tell__item
                  .tell
                    .tell__label
                      | FAX
                    .tell__number
                      | 06-6949-8304

      .global-header__inner
        nav.global-header__gnav
          globalNav
    .global-header-sticky(:class="{'global-header-sticky--fixed': scrollY > 200}")
      .global-header-sticky__wrap
        nav.global-header__gnav
          globalNav
</template>

<script>
import globalNav from '~/components/molecules/globalNav'

export default {
  components: {
    globalNav
  },
  props: {
    scrollY: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      gnavItems: [
        {
          link: '/',
          name: 'トップ'
        },
        {
          link: '/service',
          name: '会計業務サポート'
        },
        {
          link: '/company',
          name: '会社情報'
        },
        {
          link: '/contact',
          name: 'お問い合わせ'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.global-header-sticky {
  position: fixed;
  top: -50px;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  background: #fff;
  padding: 8px 0;
  transition: 0.3s;
  &__wrap {
    @include limitter;
    @include max-screen($tablet-break-point) {
      padding: 0px;
    }
  }
  &--fixed {
    top: 0;
  }
}
.global-header {
  background: #fff;
  &__wrap {
    @include limitter;
    @include max-screen($tablet-break-point) {
      padding: 0px;
    }
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    @include max-screen($break-point: 600px) {
      flex-direction: column;
      padding: 10px 0;
    }
  }
  &__logo {
    height: 36px;
    @include max-screen($tablet-break-point) {
      height: 24px;
    }
    @include max-screen($break-point: 600px) {
      margin-bottom: 16px;
    }
    img {
      display: block;
      height: 100%;
      width: auto;
    }
  }
  &__gnav {
    display: flex;
    width: 100%;
  }
}
.company-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  &__left {
    margin-right: 20px;
    @include max-screen($mobile-break-point) {
      margin-right: 0px;
    }
  }
  &__right {
    @include max-screen($mobile-break-point) {
    width: 50%;
  }
  }
  &__address {
    font-size: 1.4rem;
    line-height: 140%;
    @include max-screen($tablet-break-point) {
      font-size: 1.2rem;
    }
  }
  @include max-screen($mobile-break-point) {
    padding: 0 15px;
    justify-content: space-between;
  }
}
.company-tell {
  display: flex;
  flex-direction: column;
  &__item {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.tell {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  &__label {
    margin-right: 10px;
    font-size: 1rem;
    line-height: 120%;
  }
  &__number {
    font-size: 1.4rem;
    line-height: 120%;
    @include max-screen($tablet-break-point) {
      font-size: 1.2rem;
    }
  }
}
</style>
