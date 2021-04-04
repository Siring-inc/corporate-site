<template lang="pug">
.page
  .page__wrap
    .page__header
      pageHeader(:titleData="pageTitle" :isSmall="true")
    .page__content
      .section__header
        sectionTitle(:titleData="titleDataMerit")
      .section__content
        .merit-list
          .merit-list__item.merit-item(v-for="(item, index) in meritItem" :key="index")
            .merit-item__left
              .merit-item__number
                | {{item.number}}
              .merit-item__title(v-html="item.title")
            .merit-item__right
              .merit-item__content(v-html="item.content")
      .section__content
        .siring-think
          .siring-think__header
            .siring-think__image
              img(src="~assets/img/service/siring-think.png" alt="シリングの想い")
            .siring-think__title
              | 会計担当者のステップアップがこれからの法人運営に必須です
          .siring-think__content
            | 会計担当者のお仕事は事業経営を考えることです。
            br
            | 予算の作成・資金繰り・経営改善などは内部の人にしか円滑に行えません。
            br
            | 外部の専門家では結果についてアレコレ言うだけで本当の解決・改善には至りません。
            br
            | シリングを踏み台にして、会計担当者の時間を作り、「経営を考えられる担当者の育成」を目指しましょう。
</template>

<style lang="scss" scoped>
.siring-think {
  text-align: center;
  padding: 50px 0 70px;
  background-image: url(~assets/img/service/siring-think-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @include max-screen($tablet-break-point) {
    padding: 80px 20px;
    margin: 0 0px;
  }
  @include max-screen($mobile-break-point) {
    padding: 80px 20px 80px;
  }
  &__image {
    height: 36px;
    margin-bottom: 17px;
    @include max-screen($tablet-break-point) {
      height: 30px;
    }
    @include max-screen($mobile-break-point) {
      height: 24px;
    }
    img {
      display: inline-block;
      height: 100%;
      width: auto;
    }
  }
  &__title {
    color: $orange-darken;
    font-size: 2.4rem;
    letter-spacing: 0.08em;
    line-height: 150%;
    font-weight: 500;
    margin-bottom: 17px;
    @include max-screen($tablet-break-point) {
      font-size: 2rem;
      padding: 0 30px;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.8rem;
    }
  }
  &__content {
    font-size: 1.4rem;
    line-height: 180%;
    letter-spacing: 0.04em;
    @include max-screen($tablet-break-point) {
      text-align: left;
      padding: 0 40px;
    }
  }
}
.merit-list {
  display: flex;
  flex-direction: column;
  &__item {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.merit-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px dashed $green-lighten;
  @include max-screen($mobile-break-point) {
    flex-direction: column;
  }
  &__left {
    width: 300px;
    display: flex;
    flex-direction: column;
    @include max-screen($mobile-break-point) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  &__right {
    width: 100%;
  }
  &__number {
    color: $green-lighten;
    font-size: 1.4rem;
    margin-bottom: 6px;
  }
  &__title {
    font-size: 2rem;
    line-height: 120%;
    color: $green-lighten;
    font-weight: 500;
    @include max-screen($mobile-break-point) {
      /deep/ br {
        display: none;
      }
    }
  }
  &__content {
    font-size: 1.4rem;
    letter-spacing: 0.02em;
    line-height: 140%;
    /deep/ span {
      color: $orange-darken;
      font-weight: 500;
    }
  }
}
</style>

<script>
import sectionTitle from '~/components/atoms/sectionTitle'
import pageHeader from '~/components/atoms/pageHeader.vue'

export default {
  components: {
    sectionTitle,
    pageHeader
  },
  data() {
    return {
      pageTitle: {
        title: `現金や預金などの管理や経営の意思決定は法人で行い、<br />面倒な伝票作成はシリングにお任せください。`,
        desc: `専門スキルやノウハウをもつ専門家に作業を委託することで、委託側はご自身の本来の業務に専念することができ、<br />
        業務の効率化や高品質化、コスト削減といった付加価値も期待できます。<br />
        急速な少子高齢化による「労働力の確保」と「生産性の向上」といった課題に対して、よりスピーディーな対応が可能となります。`
      },
      titleDataMerit: {
        title: '4つのメリット'
      },
      meritItem: [
        {
          number: 'メリット1',
          title: '人的資源の選択と集中',
          content: `委託可能な対象業務を外部に委託することで、その担当要員を人材が必要な他の業務にシフトすることが可能となり、<span class="text-orange">人的資源の選択と集中</span>を実現できます。`
        },
        {
          number: 'メリット2',
          title: '業務の効率化',
          content: `自法人の主たる業務ではない対象業務を、その業務をメインとする外部に委託することでそこに蓄積されたノウハウを自法人のものとして活用することができ、<span class="text-orange">効率的な業務運営</span>が可能となります。`
        },
        {
          number: 'メリット3',
          title: `負担軽減・<br />業務の機能強化`,
          content: `専門的な知識やスキルを持つ委託先のスタッフが業務を行うことで、自法人のスタッフの負担を軽減し、<span class="text-orange">業務の機能強化</span>を図ることが可能となります。<br />
          また、経理事務部門を少数（1名～数名）で行っている場合には、<span class="text-orange">自法人のスタッフの負担を軽減</span>させることができるとともに、<span class="text-orange">不正のリスクを減らし、内部牽制機能を強化</span>することができます。`
        },
        {
          number: 'メリット4',
          title: '総額コストの削減',
          content: `既存職員の確保や新規人材の確保のためのコストを削減し、早期の事業安定化を実現することが可能です。既存要員の確保・新規要員採用が困難な状況であっても、<span class="text-orange">事業継続に必要な要員・スキルの維持</span>が確保できます。`
        }
      ]
    }
  }
}
</script>
