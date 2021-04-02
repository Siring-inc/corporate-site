<template lang="pug">
div
  .section-nav-list(id="sectionNav")
    .section-nav-list__wrap
      .section-nav-list__item(v-for="(item, index) in navItem" :key="index")
        nuxt-link.section-nav(v-scroll-to="item.scrollTo" :to="item.link")
          .section-nav__label(v-html="item.title")
          .section-nav__icon
  .section-nav-list.section-nav-sticky(id="sectionNav" :class="{'section-nav-sticky--fixed': clientRectY < -80}")
    .section-nav-list__wrap
      .section-nav-list__item(v-for="(item, index) in navItem" :key="index")
        nuxt-link.section-nav(v-scroll-to="item.scrollTo" :to="item.link")
          .section-nav__label(v-html="item.title")
          .section-nav__icon

</template>

<style lang="scss" scoped>
.section-nav-sticky {
  position: fixed;
  top: -100px;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  transition: 0.3s;
  &--fixed {
    top: 43px;
    @include max-screen($tablet-break-point) {
      top: 33px;
    }
  }
}
.section-nav-list {
  z-index: 1;
  background: $red-lighten;
  padding: 10px 0;
  &__wrap {
    @include limitter;
    border-left: 1px dotted #fff;
    display: flex;
    flex-direction: row;
  }
  &__item {
    width: 100%;
    border-right: 1px dotted #fff;
  }
}
.section-nav {
  color: $text-white;
  text-align: center;
  &__label {
    font-size: 2rem;
    line-height: 120%;
    letter-spacing: 0.08em;
    font-weight: 500;
    margin-bottom: 10px;
    @include max-screen($mobile-break-point) {
      font-size: 1.2rem;
      /deep/ .newline{
        display: block;
      }
    }
    @include max-screen($tablet-break-point) {
      font-size: 1.2rem;
      /deep/ .newline{
        display: block;
      }
    }
  }
  &__icon {
    display: block;
    margin: auto;
    width: 17px;
    height: 10px;
    background-image: url(~assets/img/icon/arrow-bottom.png);
    background-repeat: no-repeat;
  }
}
</style>

<script>
export default {
  data() {
    return {
      clientRectY: 0,
      navItem: [
        {
          title: `小規模法人<br />サポート<span class="newline">プラン</span>`,
          link: '/service',
          scrollTo: '#serviceSmall'
        },
        {
          title: `中規模法人<br />サポート<span class="newline">プラン</span>`,
          link: '/service',
          scrollTo: '#serviceMedium'
        },
        {
          title: `大規模法人<br />サポート<span class="newline">プラン</span>`,
          link: '/service',
          scrollTo: '#serviceLarge'
        },
        {
          title: `オプション<br />サービス`,
          link: '/service',
          scrollTo: '#serviceLight'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getNavClientRect)
  },
  methods: {
    getNavClientRect: function() {
      const target = document.getElementById('sectionNav')
      const clientRect = target.getBoundingClientRect()
      this.clientRectY = clientRect.top
    }
  }
}
</script>
