<template lang="pug">
  .section.section--bg-red
    .section__wrap
      .section__content
        .company-message
          .company-message__title
            | {{companyMessage.title}}
          .company-message__desc(v-html="companyMessage.text")
          .company-message__founder
            .founder
              .founder__position
                | {{founder.position}}
              .founder__name
                | {{founder.name}}
</template>

<script>
export default {
  data() {
    return {
      companyMessage: {
        title: '専門性と合理的な価格を実現します',
        text: `お客様の声を聞き、最適なサービスを提供するために業種を絞ってお客様とお付き合いさせていただいております。<br />
        <br />
        業種を特化することで、「専門性」と「合理的な価格」を実現しています。<br />
        <br />
        経理事務をサポートする会社ですが、制度の改正や業界の動きなどに精通することで、お客様と同じ方向を見てきちんと会話ができる会社を目指しています。<br />
        <br />
        ひとりのお客様のお悩みは、すべてのお客様のお悩みです。<br />
        ひとりのお客様にとって画期的な施策は、すべてのお客様にとって画期的な施策です。<br />
        <br />
        お客様のご了解の範囲内で情報を共有し蓄積することで、業界全体の発展に寄与していきたいと考えています。<br />
        <br />
        「繋がる」「繋げる」会社として、面倒な経理事務をサポートしながら、お客様の経営の良きパートナーとして、存分に力を発揮致します。<br />
        お客様のための「士業のワンストップサービス」を実現します。`
      },
      founder: {
        position: '株式会社シリング　代表取締役社長',
        name: '柳澤　一生'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.company-message {
  max-width: 890px;
  margin: auto;
  &__title {
    font-size: 3rem;
    letter-spacing: 0.08em;
    line-height: 150%;
    margin-bottom: 40px;
    text-align: center;
    color: $orange;
    font-weight: 500;
    @include max-screen($tablet-break-point) {
      font-size: 2.6rem;
    }
  }
  &__desc {
    font-size: 1.6rem;
    letter-spacing: 0.04em;
    line-height: 140%;
    margin-bottom: 30px;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
    }
  }
  &__founder {
    text-align: right;
  }
}
.founder {
  display: flex;
  flex-direction: column;
  &__position {
    font-size: 1.6rem;
    letter-spacing: 0.04em;
    line-height: 140%;
  }
  &__name {
    font-size: 1.6rem;
    letter-spacing: 0.04em;
    line-height: 140%;
  }
}
</style>
