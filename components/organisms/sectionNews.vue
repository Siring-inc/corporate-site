<template lang="pug">
  section.section
    .section__wrap
      .section__header
        h2.section__title
          sectionTitle(:titleData="titleData")
      .section__header
        .button-area.button-area--right
          linkButton(:linkData="linkData")
      .section__content
        .news-section
          .news-section__content
            ul.news-list
              li.news-list__item(v-for="(item, index) in newsItems" :key="index" v-show="index < 5")
                a.news-item(:href="item.link" target="_blank")
                  .news-item__time
                    |  {{ item.pubDate | moment }}
                  .news-item__title
                    | {{item.title}}
</template>

<script>
import linkButton from '~/components/atoms/linkButton'
import sectionTitle from '~/components/atoms/sectionTitle'

export default {
  components: {
    linkButton,
    sectionTitle
  },
  props: {
    newsItems: {
      default() {
        return []
      },
      type: Array
    }
  },
  data() {
    return {
      linkData: {
        title: 'ブログ一覧をみる',
        link: 'https://siring.theblog.me/',
        targetBlank: true
      },
      titleData: {
        title: 'お知らせ'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news-section {
  background: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px dashed $green-lighten;
  padding: 50px 120px;
  max-width: 960px;
  margin: auto;
  @include max-screen($tablet-break-point) {
    width: 100%;
    padding: 40px;
  }
}
.news-list {
  display: flex;
  flex-direction: column;
  &__item {
    margin-bottom: 35px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.news-item {
  display: flex;
  flex-direction: row;
  @include max-screen($mobile-break-point) {
    flex-direction: column;
  }
  &__time {
    font-size: 1.8rem;
    letter-spacing: 0.06em;
    margin-right: 30px;
    line-height: 130%;
    width: 110px;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
      width: 80px;
    }
    @include max-screen($mobile-break-point) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  &__title {
    font-size: 1.8rem;
    letter-spacing: 0.04em;
    line-height: 160%;
    color: $green-lighten;
    @include max-screen($tablet-break-point) {
      font-size: 1.6rem;
    }
  }
}
</style>
