<template lang="pug">
.service-list
  .service-list__item(v-for="(item, index) in service" :key="index" :id="item.id")
    .service-item
      .service-item__header
        serviceHeader(:headerData="item.header")
      .service-item__content
        .service-content(v-for="(item, index) in item.content" :key="index")
          .service-content__textblack(v-if="item.type === 'text1'" v-html="item.text")
          .service-content__textyellow(v-if="item.type === 'text2'" v-html="item.text")
      .service-item__price
        priceArea(:priceData="item.price")
      .service-content__text(v-html="item.detail")  
</template>

<style lang="scss" scoped>
.service-content {
  &__textblack {
    font-size: 1.4rem;
    // letter-spacing: 0.04em;
    line-height: 135%;
    margin-bottom: 46px;
    text-align: center;
  }
  &__textyellow {
    font-size: 1.4rem;
    letter-spacing: 0.08em;
    line-height: 150%;
    color: $orange-darken;
    text-align: center;
    @include max-screen($tablet-break-point) {
      font-size: 1.8rem;
      /deep/ br {
        display: none;
      }
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.6rem;
    }
  }
}
.service-content__text{
  max-width: 665px;
  margin: auto;
  text-align:justify ;
  margin-top: 59px;
  line-height: 19px;
  /deep/ .marker {
    color: $orange-darken;
    }
}
.service-item {
  &__header {
    margin-bottom: 33px;
    @include max-screen($tablet-break-point) {
      margin-bottom: 20px;
    }
  }
  &__content {
    margin-bottom: 43px;
    @include max-screen($tablet-break-point) {
      margin-bottom: 15px;
    }
  }
}
</style>

<script>
import priceArea from '~/components/molecules/priceAreaBlue'
import serviceHeader from '~/components/molecules/serviceHeaderBlue'

export default {
  components: {
    priceArea,
    serviceHeader
  },
  data() {
    return {
      service: {
        serviceFinancial: {
          id: 'serviceFinancial',
          header: {
            title: '財務コンサルティング'
          },
          content:[
            {
              text:
                `幹部職員や経理スタッフを集めての財務会議をサポート致します。<br />
             職員に「数字」の見方を覚えてもらうことで、拠点ごとの経営意識を育てる<br />お手伝いをさせていただきます。`,
              type: 'text1'
            },
            {
              text:
                `財務諸表を見ながら数値を話すだけのような <br />
                「きれいごと」の会議はいたしません。<br/>
                財務諸表は経営の結果が表れる書類です。<br/>
                利用者様・スタッフ・設備など、問題点や危険性を本音で話せる環境へ誘引します。<br/><br/>
                課題に蓋をしていては、経営は改善しません。`,
              type: 'text2'
            }
            ],
          price: [
            {
              title: '報酬',
              desc: `※訪問日数により変動致します。`,
              priceList: [
                {
                  term: '110,000円 / 月',
                  desc: '+ 実費交通費'
                }
              ]
            }
          ],
          detail:`社会福祉法上、すべての社会福祉法人は、社会福祉法人会計基準省令に従い、会計処理を行うことが義務付けられています。（社会福祉法第45条の23）<br/>
                　&ensp;社会福祉法人の会計処理は、これまで法人が実施する事業の種類ごとに様々な会計ルールが併存していましたが、<span class="marker">法人全体の財務状況を明らか</span>にし、<span class="marker">経営分析を可能にする</span>とともに、<span class="marker">外部への情報公開</span>にも資することを目的に、平成24年度（平成27年度完全移行）から「社会福祉法人会計基準」に一元化を図っています。<br/><br/>
                これからの時代、社会福祉法人も<span class="marker">生き残りをかけて、経営努力</span>をしていく必要があり、
                その検討資料として財務諸表があります。<br/>
                これからは、経営状況のよい施設こそが<span class="marker">利用者やスタッフに選ばれていく</span>施設になります。<br/><br/>
                その根幹となるものが、会計処理です。`
        }
      }
    }
  }
}
</script>
