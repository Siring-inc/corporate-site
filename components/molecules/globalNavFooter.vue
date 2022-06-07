<template lang="pug">
  .gnav(:class="{'gnav--white': isWhite, 'gnav--small': isSmall, }")
    .gnav__item(v-for="(item, index) in gnavItems" :key="index")
      nuxt-link.gnav__link(:to="item.link")
        | {{item.name}}
</template>

<script>
export default {
  props: {
    isWhite: {
      default: false,
      type: Boolean
    },
    isSmall: {
      default: false,
      type: Boolean
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
        },
        {
          link: '/privacy',
          name: '個人情報に関する取り扱い'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.gnav {
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  &--white {
    color: $text-white;
  }
  &--small {
    .gnav__item {
      border-right: none;
      font-size: 1.4rem;
      width: auto;
      margin-right: 40px;
      @include max-screen($tablet-break-point) {
        margin-right: 0;
        font-size: 1.2rem;
      }
      @include max-screen($break-point: 350px) {
        font-size: 1rem;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__item {
    width: 25%;
    font-size: 1.6rem;
    line-height: 120%;
    box-sizing: border-box;
    border-right: 1px solid;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
      width: auto;
      box-sizing: border-box;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.2rem;
      border-color: lighten($text-black, 60%);
    }
    @include max-screen($break-point: 350px) {
      margin-right: 0;
      font-size: 1rem;
    }
    &:last-child {
      border-right: 0;
    }
  }
  &__link {
    display: block;
    color: inherit;
    text-align: center;
    padding: 4px 0;
    font-weight: 500;
    letter-spacing: 0.1em;
    @include max-screen($tablet-break-point) {
      padding: 4px 12px;
    }
    @include max-screen($break-point: 600px) {
      padding: 8px 12px;
    }
    @include max-screen($mobile-break-point) {
      padding: 8px 8px;
    }
  }
}
</style>
