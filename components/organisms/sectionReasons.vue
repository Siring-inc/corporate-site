<template lang="pug">
  section.reasons
    .reasons__wrap
      .reasons__header
        h2.reasons-header
          .reasons-header__balloon
            img(src="~assets/img/reasons/balloon.png" alt="私たちはこんなふうに活用しています。")
          .reasons-header__title
            | 社会福祉法人様がシリングを選んだ理由
      .reasons__content
        ul.reason-list
          li.reason-list__item.reason-panel(v-for="(item, index) in reasonItems" :key="index" :class="{'reason-panel--mirror': (parseInt(index + 1) % 2) === 0}")
            .reason-panel__header
              .reason-panel__area 
                | {{item.area}}
              .reason-panel__name
                | {{item.name}}
              .reason-panel__category
                | {{item.category}}
            .reason-panel__content
              .reason-panel__left
                .reason-panel__image
                  img(:src="item.image" :alt="item.name")
              .reason-panel__right
                .reason-panel__title
                  | {{item.title}}
                .reason-panel__desc(v-html="item.desc")

</template>

<script>
export default {
  data() {
    return {
      reasonItems: [
        {
          name: 'あいおい福祉会様',
          area: '兵庫県相生市',
          category: '介護',
          image: 'img/reasons/aioi.png',
          title: '担当者にはもっとステップアップして欲しくてシリングを活用',
          desc: `実務を任せられる担当者がいて外部委託する必要はそんなになかったのですが、<span>担当者には予算や経営などもっとステップアップしてほしくて</span>、担当者の時間を開けるためにシリングさんを活用しています。`
        },
        {
          name: '二見中央福祉会様',
          category: '保育',
          image: 'img/reasons/hutami.png',
          title: '保育園のお仕事は書類仕事が多い！',
          desc: `園長の負担の軽減のためにシリングさんにお願いしました。千葉県と福岡県と熊本県に園のある弊社では全国的に対応いただけるのも魅力的でした。`
        },
        {
          name: '豊中太陽会様',
          area: '大阪府豊中市',
          category: '障害',
          image: 'img/reasons/taiyo.png',
          title:
            '会計担当者が気軽に質問できるセカンドオピニオンの役割を期待して',
          desc: `監事が公認会計士なので、監査時の確認事項にもしっかり対応できるよう、会計担当者が気軽に質問できるセカンドオピニオンの役割も期待してシリングさんにお願いしました。`
        },
        {
          name: '楽山会様',
          area: '長崎県島原市',
          category: '介護',
          image: 'img/reasons/rakuzan.png',
          title: '積極的に外部委託を取り入れている中、会計業務の外部委託はじめました。',
          desc: `シリングのことはYouTubeで知りました。<br>長崎と大阪の距離の差は気になりましたが、コロナ渦で進んだWeｂ会議サービスの活用も視野に入れ外部委託を決意しました。<br>比較対象がなく、必要以上に手間暇をかけてしまっていた経理業務の慣習を相談しながら少しずつご合理的に修正してもらっています。`
        },
        {
          name: 'ひまわり園様',
          area: '大阪府羽曳野市',
          category: '障害',
          image: 'img/reasons/himawari.png',
          title: '現状の現場に寄り添ってもらいたくてシリングさんを活用',
          desc: `現場の仕事が忙しく、どうしても会計が後回しになっていました。有名な顧問先生がいたのですが、もっとひまわり園の現状に寄り添ってもらいたくてシリングさんへ切り替えました。`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.reasons {
  background-image: url(~assets/img/reasons/bg.png);
  background-size: cover;
  padding: 80px 0;
  &__wrap {
    @include limitter;
  }
  &__header {
    margin-bottom: 80px;
  }
}
.reasons-header {
  text-align: center;
  &__balloon {
    margin-bottom: 20px;
    height: 26px;
    @include max-screen($mobile-break-point) {
      width: 100%;
      height: auto;
    }
    img {
      display: inline-block;
      height: 100%;
      width: auto;
      @include max-screen($mobile-break-point) {
        width: 100%;
        height: auto;
      }
    }
  }
  &__title {
    font-size: 3rem;
    letter-spacing: 0.06em;
    line-height: 160%;
    @include max-screen($tablet-break-point) {
      font-size: 2.6rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 2.2rem;
    }
  }
}
.reason-list {
  &__item {
    width: 863px;
    margin: 0 auto 120px;
    @include max-screen($tablet-break-point) {
      width: 100%;
      max-width: 550px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.reason-panel {
  &--mirror {
    .reason-panel__left {
      order: 2;
      margin-right: 0;
      @include max-screen($tablet-break-point) {
        order: 1;
        margin-right: 0;
      }
    }
    .reason-panel__right {
      order: 1;
      margin-right: 27px;
      @include max-screen($tablet-break-point) {
        order: 2;
        margin-right: 0;
      }
    }
  }
  &__header {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    @include max-screen($mobile-break-point) {
      flex-direction: column;
      margin-bottom: 20px;
    }
  }
  &__name {
    color: $red;
    font-size: 3.6rem;
    letter-spacing: 0.14em;
    line-height: 110%;
    font-weight: 800;
    margin-right: 24px;
    @include max-screen($tablet-break-point) {
      font-size: 3rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 2.4rem;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  &__area {
    margin-right: 20px;
    @include max-screen($mobile-break-point) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  &__category {
    font-size: 1.6rem;
    letter-spacing: 0.2em;
    padding: 4px 6px;
    border-radius: 6px;
    padding: 4px 6px;
    box-sizing: border-box;
    color: $black;
    border: 1px solid $red;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
    }

    @include max-screen($mobile-break-point) {
      font-size: 1.2rem;
    }
  }
  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    @include max-screen($tablet-break-point) {
      flex-direction: column;
    }
  }
  &__left {
    order: 1;
    margin-right: 27px;
    @include max-screen($tablet-break-point) {
      margin-right: 0;
    }
  }
  &__right {
    order: 2;
  }
  &__image {
    width: 361px;
    @include max-screen($tablet-break-point) {
      margin: 0 auto 20px;
    }
    @include max-screen($mobile-break-point) {
      width: 100%;
    }
    img {
      display: inline-block;
      width: 100%;
      height: auto;
    }
  }
  &__title {
    font-size: 2.2rem;
    letter-spacing: 0.2em;
    line-height: 180%;
    border-bottom: 1px dashed $red;
    margin-bottom: 7px;
    padding-bottom: 7px;
    font-weight: 800;
    color: $orange-darken;
    @include max-screen($tablet-break-point) {
      font-size: 1.8rem;
    }

    @include max-screen($mobile-break-point) {
      font-size: 1.6rem;
    }
  }
  &__desc {
    font-size: 1.6rem;
    line-height: 200%;
    letter-spacing: 0.2em;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
    }
    span {
      color: $orange-darken;
    }
  }
}
</style>
