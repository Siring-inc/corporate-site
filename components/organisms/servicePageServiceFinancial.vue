<template lang="pug">
.service-list
  .service-list__item(v-for="(item, index) in service" :key="index" :id="item.id")
    .service-item
      .service-item__header
        serviceHeader(:headerData="item.header")
      .service-item__content
        .service-content(v-for="(item, index) in item.content" :key="index")
          .service-content__text(v-if="item.type === 'text'" v-html="item.text")
          .service-content__image(v-else-if="item.type === 'image'")
            img.service-content__image--pc(:src="item.image.pc" :alt="item.text")
            img.service-content__image--sp(:src="item.image.sp" :alt="item.text")
      .service-item__list(v-if="item.pointList")
        servicePointList(:pointList="item.pointList")
      .service-item__price
        priceArea(:priceData="item.price")
      .service-content__text(v-html="item.detail")  
    //-   .service-item__detail
    //-     serviceHeader(:detailData="item.detail")
    //-  <p>{{item.detail}}</p> 

</template>

<style lang="scss" scoped>
.service-content {
  &__text {
    font-size: 1.4rem;
    letter-spacing: 0.04em;
    line-height: 160%;
    margin-bottom: 40px;
    text-align: center;
    /deep/ .marker {
      // background: linear-gradient(transparent 50%, lighten($red, 30%) 50%);
      background:linear-gradient(transparent 50%, lighten(#77B4CE, 30%) 50%);
      font-size: 2rem;
      line-height: 160%;
      font-weight: 600;
      margin: 0 4px;
      @include max-screen($mobile-break-point) {
        font-size: 1.8rem;
      }
    }
    /deep/ br {
      display: block;
      @include max-screen($mobile-break-point) {
        display: block;
      }
    }
  }
  &__image {
    margin-bottom: 40px;
    @include max-screen($tablet-break-point) {
      margin-bottom: 40px;
    }
    img {
      width: 100%;
      height: auto;
    }
    &--pc {
      display: block;
      @include max-screen($mobile-break-point) {
        display: none;
      }
    }
    &--sp {
      display: none;
      @include max-screen($mobile-break-point) {
        display: block;
      }
    }
  }
}
.service-list {
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  &__item {
    padding-top: 80px;
    margin-bottom: 40px;
    @include max-screen($tablet-break-point) {
      padding-top: 60px;
    }
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.service-item {
  &__header {
    margin-bottom: 50px;
    @include max-screen($tablet-break-point) {
      margin-bottom: 30px;
    }
  }
  &__content {
    margin-bottom: 30px;
    @include max-screen($tablet-break-point) {
      margin-bottom: 15px;
    }
  }
  &__list {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

<script>
import priceArea from '~/components/molecules/priceArea'
import servicePointList from '~/components/molecules/servicePointList'
import serviceHeader from '~/components/molecules/serviceHeader'

export default {
  components: {
    priceArea,
    servicePointList,
    serviceHeader
  },
  data() {
    return {
      service: {
        serviceFinancial: {
          id: 'serviceFinancial',
          header: {
            title: '財務コンサルティング',
            read: `幹部職員や経理スタッフを集めての財務会議をサポート致します。<br />
             職員に「数字」の見方を覚えてもらうことで、拠点ごとの経営意識を育てる お手伝いをさせていただきます。`
          },
          content:[
            {
              text:
                `財務諸表を見ながら数値を話すだけのような <br />
                「きれいごと」の会議はいたしません。<br/>
                財務諸表は経営の結果が表れる書類です。<br/>
                利用者様・スタッフ・設備など、問題点や危険性を本音で話せる環境へ誘引します。<br/><br/>
                課題に蓋をしていては、経営は改善しません。`,
              type: 'text'
            }
            ],
          price: [
            {
              title: '報酬',
              desc: `※訪問日数により変動致します。`,
              priceList: [
                {
                  term: '110,000円 / 月',
                  desc: '+ 実費交通費　'
                }
              ]
            }
          ],
          detail:`社会福祉法上、すべての社会福祉法人は、社会福祉法人会計基準省令に従い、会計処理を行うことが義務付けられています。（社会福祉法第45条の23）
　社会福祉法人の会計処理は、これまで法人が実施する事業の種類ごとに様々な会計ルールが併存していましたが、法人全体の財務状況を明らかにし、経営分析を可能にするとともに、外部への情報公開にも資することを目的に、平成24年度（平成27年度完全移行）から「社会福祉法人会計基準」に一元化を図っています。
これからの時代、社会福祉法人も生き残りをかけて、経営努力をしていく必要があり、
その検討資料として財務諸表があります。
これからは、経営状況のよい施設こそが利用者やスタッフに選ばれていく施設になります。
その根幹となるものが、会計処理です。`
        }
      }
    }
  }
}
</script>
