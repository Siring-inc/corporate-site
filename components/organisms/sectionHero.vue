<template lang="pug">
  section.hero
    .hero__wrap
      .hero__content
        .message
          h1.message__main
            img(src="~assets/img/hero/message.png" alt="社会福祉法人のための記帳代行")
          p.message__text
            | 社会福祉法人 経理事務マニュアルに掲載されているように、
            br
            | 職員による経理のマンパワーや専門知識の不足をシリングがサポートします。
            br
            | 今、話題の「経理の業務委託」で園児や利用者へ対する時間を増やしませんか。
      .hero__content
        ul.hero-menu
          li.hero-menu__item(v-for="(item, index) in menuItems" :key="index")
            nuxt-link.menu(v-scroll-to="item.scrollTo" :class="'menu--' + item.color" :to="item.link")
              .menu__title(v-html="item.title")
              .menu__button
                | 詳しくはこちら

</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: '社会福祉法人に<br />強い理由',
          link: '/',
          scrollTo: '#sectionFeatures',
          color: 'green'
        },
        {
          title: 'シリングを<br />選んだ理由',
          link: '/',
          scrollTo: '#sectionReasons',
          color: 'red'
        },
        {
          title: '会計担当者を<br />サポート',
          link: '/service',
          scrollTo: '#',
          color: 'blue'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(~assets/img/hero/bg.png);
  padding: 150px 0;
  box-sizing: border-box;
  @include max-screen($tablet-break-point) {
    padding: 60px 0 100px;
  }
  &__wrap {
    @include limitter;
  }
  &__content {
    margin-bottom: 60px;
    @include max-screen($break-point: 600px) {
      margin-bottom: 40px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.message {
  text-align: center;
  &__main {
    margin-bottom: 18px;
    height: 63px;
    @include max-screen($tablet-break-point) {
      height: auto;
      width: 100%;
    }
    img {
      display: inline-block;
      height: 100%;
      width: auto;
      @include max-screen($tablet-break-point) {
        height: auto;
        width: 100%;
      }
    }
  }
  &__text {
    font-size: 1.8rem;
    line-height: 200%;
    letter-spacing: 0.14em;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
      text-align: left;
      br {
        display: none;
      }
    }
  }
}
.hero-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 960px;
  margin: auto;
  @include max-screen($break-point: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item {
    width: 33.333%;
    @include max-screen($tablet-break-point) {
      width: 250px;
      height: 100%;
    }
    @include max-screen($break-point: 600px) {
      width: 100%;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.menu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 303px;
  height: 220px;
  background-position: left top;
  background-size: contain;
  background-repeat: no-repeat;
  @include max-screen($tablet-break-point) {
    width: 100%;
    background-size: 100% 100%;
    height: 100%;
    padding: 35px 0;
    box-sizing: border-box;
    @include max-screen($break-point: 600px) {
      padding: 45px 35px;
    }
  }
  &--green {
    color: #438f36;
    background-image: url(~assets/img/button/menu-bg-green.png);
  }
  &--red {
    color: #c73f3f;
    background-image: url(~assets/img/button/menu-bg-red.png);
  }

  &--blue {
    color: #2293ac;
    background-image: url(~assets/img/button/menu-bg-blue.png);
  }
  &__title {
    font-size: 2.6rem;
    line-height: 140%;
    letter-spacing: 0.08em;
    margin-bottom: 16px;
    font-weight: 400;
    @include max-screen($tablet-break-point) {
      font-size: 1.8rem;
      margin-bottom: 12px;
    }
    @include max-screen($break-point: 600px) {
      /deep/ br {
        display: none;
      }
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.6rem;
    }
  }
  &__button {
    display: inline-block;
    width: 146px;
    background: #fff;
    border-radius: 20px;
    padding: 8px 22px;
    font-size: 1.4rem;
    letter-spacing: 0.04em;
    box-sizing: border-box;
    @include max-screen($tablet-break-point) {
      font-size: 1.2rem;
      padding: 6px 16px;
      width: auto;
    }
  }
}
</style>
