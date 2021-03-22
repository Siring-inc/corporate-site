<template lang="pug">
.service-list
  .service-list__item(
    v-for='(item, index) in service',
    :key='index',
    :id='item.id'
  )
    .service-item
      .service-item__header
        serviceComment(:commentData='item.roundCmt')
        serviceHeader(:headerData='item.header')
      .service-item__content
        .service-content(v-for='(item, index) in item.content', :key='index')
          .service-content__text(
            v-if='item.type === "text"',
            v-html='item.text'
          )
      //- css left for title and right for content
      .service-item__recommend(v-for='(item, index) in item.recommendFrame', :key='index')
        .section-recommend__title(v-html="item.title")
        .section-recommend__content(v-html="item.content")  
        //-  要Check!!      
      .service-item__list
        servicePointListSupport(:pointList='item.pointList')
        //- サービス内容
      .service-chart
        .service-chart__title(v-html='item.serviceChart.title')
        img.service-chart__image(
              :src='item.serviceChart.pc',
              :alt='item.text'
             )
      .service-item__price
      .service-item-price__header(v-html="item.reward.head")
      .service-item-price__detail
        priceArea(:priceData='item.reward.price')
</template>

<style lang="scss" scoped>
.service-chart{
  &__image {
    width: 100%;
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
.service-content {
  &__text {
    font-size: 1.4rem;
    letter-spacing: 0.04em;
    line-height: 160%;
    margin-bottom: 40px;
    text-align: center;
    /deep/ .marker {
      background: linear-gradient(transparent 50%, lighten($red, 30%) 50%);
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
import servicePointListSupport from '~/components/molecules/servicePointListSupport'
import serviceHeader from '~/components/molecules/serviceHeader'
import serviceComment from '~/components/molecules/serviceComment'

export default {
  components: {
    priceArea,
    servicePointListSupport,
    serviceHeader,
    serviceComment,
  },
  data() {
    return {
      service: {
        serviceSmall: {
          id: 'serviceSmall',
          roundCmt: {
            text: `単独保育園作業所など`,
          },
          header: {
            title: '小規模法人 サポート',
            read: `まるっと「おまかせ」プラン`,
          },
          content: [
            {
              text: `日々の業務に追われてなかなか会計業務まで手が回らない<br/>
                法人様向けのサービスです。`,
              type: 'text',
            },
            {
              text: `こんな法人様へオススメ。<hr/>`,
              type: 'text',
            },
          ],
          recommendFrame: [
            {
              title: '施設基準',
              content: '：1拠点で事業を運営（単独保育園、作業所など）',
            },
            {
              title: '経理スタッフ',
              content: '：専任の経理担当者が1名以下',
            },
            {
              title: '予算基準',
              content: '：予算のザックリ感が否めない',
            },
          ],
          pointList: 
            {
              head: '要Check!!',
              content: [
                '専任の経理担当者がいない',
                '月次で財務会議ができていない状況だ',
                '予算をザックリ作っている',
                '日々の業務に追われてなかなか会計業務まで手が回らない',
                '決算業務で毎年残業が発生してしまう',
                '利用者様や園児様のために、もっと時間がほしい',
              ],
            },
          serviceChart : {
            title:`サービス内容 <hr/>`,
            // pc: '/service/service-image-pc.png',
            // sp: '/service/service-image-sp.png'
            pc: '/service/service-content-image-pc.png',
            // type: 'image',
          },
          reward:{
            head: '報酬<hr/>',
          
          price: [
            {
              title: '月額報酬',
              priceList: [
                {
                  term: '障害',
                  desc: '22,000円 / 月',
                },
                {
                  term: '保育',
                  desc: '33,000円 / 月',
                },
                {
                  term: '介護',
                  desc: '110,000円 / 月',
                },
              ],
            },
            {
              title: '決算書・附属明細作成報酬',
              priceList: [
                {
                  term: '障害',
                  desc: '165,000円 / 年',
                },
                {
                  term: '保育',
                  desc: '165,000円 / 年',
                },
                {
                  term: '介護',
                  desc: '220,000円 / 年',
                },
              ],
            },
          ],
          }
        },
      },
    }
  },
}
</script>
