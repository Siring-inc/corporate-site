<template lang="pug">
.service-list
  .service-list__item(
    v-for='(item, index) in service',
    :key='index',
    :id='item.id'
  )
    .service-item
      .service-item__header
        serviceComment(v-if="item.id === 'serviceSmall'"　,:commentData='item.roundCmt')
        serviceHeader(:headerData='item.header')
      .service-item__content
        .service-content(v-for='(item, index) in item.content', :key='index')
          .service-content__text(
            v-if='item.type === "text"',
            v-html='item.text'
          )
      //- こんな法人様へオススメ
      .service-item-recommend
        .service-item-recommend__frame 
          .service-item-recommend__left
            .service-item-recommend__head(v-for='(item, index) in item.recommendFrame.title', :key='index')
              | {{item}}
          .service-item-recommend__right
            .service-item-recommend__content(v-for='(item, index) in item.recommendFrame.content', :key='index')
              | {{item}}
        //-  要Check!!      
      .service-item__list
        servicePointListSupport(:pointList='item.pointList')
        //- サービス内容
      .service-chart
        .service-item__header(v-html='item.serviceChart.title')
        img.service-chart__image(
              :src='item.serviceChart.pc',
              :alt='item.text'
             )
      .service-item__price
        .service-item__header(v-html="item.reward.head")
        .service-item-price__detail
          priceArea(:priceData='item.reward.price')
</template>

<style lang="scss" scoped>
.service-chart{
  &__image {
    width: 95%;
    margin-bottom: 6.8rem;
    margin-top: 23px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @include max-screen($tablet-break-point) {
      margin-bottom: 40px;
    }
    @include max-screen($mobile-break-point) {
      width: 100%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
.service-content {
  &__text {
    font-size: 1.5rem;
    letter-spacing: 0.04em;
    line-height: 140%;
    margin-bottom: 6.5rem;
    text-align: center;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.2rem;
    }
    
    /deep/ .headitem {
      font-size: 2.4rem;
      color: $red;
      font-weight: 600;
      line-height: 120%;
      margin-bottom: 16px;
      text-align: center;
      @include max-screen($tablet-break-point) {
        font-size: 3.2rem;
      }
      @include max-screen($mobile-break-point) {
        font-size: 2.4rem;
      }
      @include max-screen($small-mobile-break-point) {
        font-size: 2.1rem;
      }
    }
    /deep/ hr {
      background-color: $red;
      border: none;
      width: 5rem;
      height: 0.5rem;
      border-radius: 2rem;
      display: block;
      margin-top: 1.8rem;
      margin-bottom: -4.5rem;
      @include max-screen($mobile-break-point) {
        display: block;
      }
    }
  }

}
.service-list {
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  &__item {
    background-color: #fff;
    box-shadow: 1.5rem 1.5rem #FAE3E3;
    border-radius: 2rem;
    width: 90%;
    padding-top: 2.8rem;
    margin-bottom: 12.8rem;
    margin-left: auto;
    margin-right: auto;
    @include max-screen($tablet-break-point) {
      padding: 6rem 10px 0;
      width: 100%;
      box-sizing: border-box;
      box-shadow: 0.8rem 0.8rem #fae3e3;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.service-item {
  &__header {
    font-size: 2.4rem;
    color: $red;
    // letter-spacing: 10px;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
    text-align: center;
    @include max-screen($tablet-break-point) {
      font-size: 3.2rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 2.4rem;
    }
    @include max-screen($small-mobile-break-point) {
      font-size: 2.1rem;
    }
  }
    /deep/ hr {
      margin-top: 1.9rem;
      background-color: $red;
      border: none;
      width: 5rem;
      height: 0.5rem;
      border-radius: 2rem;
      display: block;
      @include max-screen($mobile-break-point) {
        display: block;
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
.service-item-recommend{
  &__left{
    width: 24%;
    margin-left: 10%;
    @include max-screen($tablet-break-point) {
      width: 28%;
      margin-left: 7%;
    }
    @include max-screen($mobile-break-point) {
      width: 26%;
      margin-left: 5%;
    }
    @include max-screen($small-mobile-break-point) {
      margin-left: 1px;
    }
  }
  &__right{
    width: 76%;
    justify-content: flex-end;
    @include max-screen($tablet-break-point) {
      width: 72%;
    }
    @include max-screen($mobile-break-point) {
      width: 74%;
    }
  } 
  &__frame{
    display: flex;
    border-radius: 10px;
    border: 2px solid $red;
    padding: 16px;
    box-sizing: border-box;
    max-width: 665px;
    margin: auto;
    text-align: center;
    @include max-screen($tablet-break-point) {
      max-width: 52rem;
    }
    @include max-screen($mobile-break-point) {
      max-width: 37rem;
      padding: 2px;
    }
    @include max-screen($small-mobile-break-point) {
      max-width: 26rem;
      padding: 4px;
    }
  }
  &__head{
    font-size: 1.6rem;
    line-height: 194%;
    color: $orange-darken;
    text-align: left;
    @include max-screen($tablet-break-point) {
      font-size: 1.3rem;
      /deep/ br {
        display: none;
      }
    }
    @include max-screen($mobile-break-point) {
      font-size: 9px;
    }
    @include max-screen($small-mobile-break-point) {
      font-size: 8px;
    }
  }
  &__content{
    font-size: 1.6rem;
    line-height: 194%;
    text-align: left;
    @include max-screen($tablet-break-point) {
      font-size: 1.3rem;
      /deep/ br {
        display: none;
      }
    }
    @include max-screen($mobile-break-point) {
      font-size: 9px;
    }
    @include max-screen($small-mobile-break-point) {
      font-size: 8px;
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
            text: `単独保育園<br/>作業所<br/>など`,
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
              text: `<span class="headitem">こんな法人様へオススメ</span> <hr/>`,
              type: 'text',
            },
          ],
          recommendFrame: {
              title:[ '施設基準','経理スタッフ基準','予算基準'],
              content:[ '：1拠点で事業を運営（単独保育園、作業所など）','：専任の経理担当者が1名以下','：予算のザックリ感が否めない']
          },
          pointList: 
            {
              head: '<span class="headitem">要Check!!</span> <hr/>',
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
            title:`<span class="headitem">サービス内容 </span> <hr/>`,
            // pc: '/service/service-image-pc.png',
            // sp: '/service/service-image-sp.png'
            pc: '/service/service-content-image-min-pc.png',
            // type: 'image',
          },
          reward:{
            head: '<span class="headitem">報酬 </span> <hr/>',
          
          price: [
            {
              title: '月額報酬',
              priceList: [
                {
                  term: '障害',
                  desc: '19,800円 / 月～',
                },
                {
                  term: '保育',
                  desc: '19,800円 / 月～',
                },
                {
                  term: '介護',
                  desc: '88,000円 / 月～',
                },
              ],
            },
            {
              title: '決算書・附属明細作成報酬',
              priceList: [
                {
                  term: '障害',
                  desc: '99,000円 / 年',
                },
                {
                  term: '保育',
                  desc: '99,000円 / 年',
                },
                {
                  term: '介護',
                  desc: '165,000円 / 年',
                },
              ],
            },
          ],
          }
        },
        serviceMedium: {
          id: 'serviceMedium',
          header: {
            title: '中規模法人 サポート',
            read: `「決算書サポート」プラン`,
          },
          content: [
            {
              text: `経理部門のレベルアップや効率化を図りたい<br/>
                    法人様向けのプランです。`,
              type: 'text',
            },
            {
              text: `<span class="headitem">こんな法人様へオススメ</span> <hr/>`,
              type: 'text',
            },
          ],
          recommendFrame: {
              title:[ '施設基準','経理スタッフ基準','予算基準'],
              content:[ '：2～3拠点で事業を運営','：各拠点に出納担当者がいる',' ：予算は本部で作成している']
          },
          pointList: 
            {
              head: '<span class="headitem">要Check!!</span> <hr/>',
              content: [
                '主となるスタッフに業務負担がかかっている',
                '主となる経理スタッフがもし退職すると業務が滞る可能性がある',
                '主となるスタッフにもっと経営的な業務をしてほしい',
                '経理スタッフが気軽に相談できる相手がほしい',
                '社福会計がわかる人材がなかなか見つからない',
                '顧問の専門家が頼りない',
              ],
            },
          serviceChart : {
            title:`<span class="headitem">サービス内容 </span> <hr/>`,
            pc: '/service/service-content-image-medium-pc.png',
          },
          reward:{
            head: '<span class="headitem">報酬 </span> <hr/>',
          price: [
            {
              title: '月額報酬',
              priceList: [
                {
                  term: '障害',
                  desc: '55,000円 / 月～',
                },
                {
                  term: '保育',
                  desc: '44,000円 / 月～',
                },
                {
                  term: '介護',
                  desc: '165,000円 / 月～',
                },
              ],
            },
            {
              title: '決算書・附属明細作成報酬',
              priceList: [
                {
                  term: '障害',
                  desc: '220,000円 / 年',
                },
                {
                  term: '保育',
                  desc: '220,000円 / 年',
                },
                {
                  term: '介護',
                  desc: '330,000円 / 年',
                },
              ],
            },
          ],
          }
        },
        serviceMax: {
          id: 'serviceLarge',
          header: {
            title: '大規模法人 サポート',
            read: `「経理スタッフサポート」プラン`,
          },
          content: [
            {
              text: `経理スタッフの業務環境を改善したい法人様や<br/>
                    一時的な人員不足を解消したい法人様向けのプランです。`,
              type: 'text',
            },
            {
              text: `<span class="headitem">こんな法人様へオススメ</span> <hr/>`,
              type: 'text',
            },
          ],
          recommendFrame: {
              title:[ '施設基準','経理スタッフ基準','予算基準'],
              content:[ '：4拠点以上で事業を運営','：各拠点に専任の経理担当者がいる','：各拠点で作成している']
          },
          pointList: 
            {
              head: '<span class="headitem">要Check!!</span> <hr/>',
              content: [
                '産休や介護休暇など、一時的にスタッフの穴をうめたい',
                '経理スタッフの残業が多くなっているので業務量を削減したい',
                '社福会計に詳しくないので、フォローしてほしい',
                '経理スタッフの入れ替わりが多いのでなんとかしたい'
              ],
            },
          serviceChart : {
            title:`<span class="headitem">サービス内容 </span> <hr/>`,
            pc: '/service/service-content-image-max-pc.png',
          },
          reward:{
            head: '<span class="headitem">報酬 </span> <hr/>',
            price: [
              {
                title: '月額報酬',
                priceList: [
                  {
                    term: '障害',
                    desc: '55,000円 / 月～',
                  },
                  {
                    term: '保育',
                    desc: '55,000円 / 月～',
                  },
                  {
                    term: `介護 <span class="pricenote">（特養含む拠点）</span>`,
                    desc: '88,000円 / 月～',
                  },
                  {
                    term: `介護 <span class="pricenote">（上記以外）</span>`,
                    desc: '55,000円 / 月～',
                  }
                ],
              },
              {
                title: '決算書・附属明細作成報酬',
                priceList: [
                  {
                    term: '',
                    desc: '頂きません',
                  }
                ],
              },
            ],
          }
        }
      }
    }
  }
}
</script>