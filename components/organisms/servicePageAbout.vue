<template lang="pug">
  .section
    .section__wrap
      .section__content
        .about
          .about__header
            .about-title
              | 社会福祉法人・社会福祉事業者の経理代行について
          .about__content
            .about__text
              | 社会福祉法人会計基準は、一般の企業会計基準とは大きく異なります。
              br
              | そのため、一般事業会社での経理経験があっても、社会福祉法人会計基準に詳しい人材は非常に少ないのが現状です。
              br
              br
              | 会計基準や通知等は時代の状況によっても変化していくため、
              br
              | 「以前と同じ」「前にいた人に言われた」内容だけでは対応できなくなる可能性もあります。
      .section__content
        .about
          .about__header
            .about-title.about-title--small
              | シリングが社会福祉法人の経理代行に強い理由
          .about__content
            .about__text
              | 社会福祉法人の会計専門のスタッフが入力業務・記帳作成を行います。
              br
              | 地方自治体で実際に社会福祉法人の指導監査（会計部門）に携わっていたスタッフや、社会福祉法人会計簿記中級合格者など、
              br
              | 社会福祉法人会計の実務経験・知識が豊富な人材を集めた社福会計専門チームが対応します。
      .section__content
        .about
          .about__header
            .about-title.about-title--small
              | 社会福祉法人会計基準と企業会計原則について
          .about__content
            .about-desc-list
              .about-desc-list__item
                .about-desc
                  .about-desc__term
                    | 1. 社会福祉法人会計基準
                  .about-desc__detail
                    | 社会福祉法人は、社会福祉法第45条の23において「社会福祉法人会計基準（平成28年厚生労働省令第79号）」に従い会計処理を行うことが義務付けられています。
                    br
                    | また、一般に公正妥当と認められる社会福祉法人会計の慣行を記載した通知（「運用上の取扱い」、「運用上の留意事項」）に従い、法人全体・事業区分別・拠点区分別に、資金収支計算書・事業活動計算書・貸借対照表の3つの計算書類を作成する必要があります。
                    br
                    | これらの計算書類については、その付属明細書及び財産目録を合わせて作成した上で、毎会計年度終了後3か月以内（6月30日まで）に所轄庁へ提出しなければなりません。
              .about-desc-list__item
                .about-desc
                  .about-desc__term
                    | 2. 企業会計原則
                  .about-desc__detail
                    | 株式会社などの事業（利潤の追求を目的とした一般事業）を経営する法人や個人事業者は「企業会計原則」に従って会計処理を行い、一般に公正妥当と認められる企業会計の基準その他の企業会計の慣行を斟酌しなければならないとされています。
</template>

<style lang="scss" scoped>
.about {
  &__header {
    margin-bottom: 24px;
  }
  &__text {
    font-size: 1.4rem;
    line-height: 180%;
    letter-spacing: 0.04em;
    text-align: center;
    @include max-screen($tablet-break-point) {
      text-align: left;
    }
  }
}
.about-title {
  font-size: 3rem;
  letter-spacing: 0.06em;
  line-height: 140%;
  color: $green-lighten;
  text-align: center;
  @include max-screen($tablet-break-point) {
    font-size: 2.6rem;
  }
  @include max-screen($mobile-break-point) {
    font-size: 2.4rem;
  }
  &--small {
    font-size: 2.4rem;
    @include max-screen($tablet-break-point) {
      font-size: 2rem;
    }
  }
  @include max-screen($mobile-break-point) {
    font-size: 1.8rem;
  }
}
.about-desc {
  &__term {
    display: inline-block;
    color: $text-white;
    background: $green-lighten;
    border-radius: 15px;
    padding: 6px 14px;
    box-sizing: border-box;
    margin-bottom: 16px;
    font-weight: 500;
  }
  &__detail {
    font-size: 1.4rem;
    letter-spacing: 0.04em;
    line-height: 180%;
  }
}
.about-desc-list {
  max-width: 880px;
  margin: auto;
  &__item {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
