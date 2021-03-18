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
        serviceLight: {
          id: 'serviceLight',
          header: {
            title: '会計チェック「Light」',
            read: `社福会計特有の「絶対に外せないポイント」をチェック。<br />最低限の整合性は死守します。`
          },
          content: [
            {
              text:
                '日々の会計処理の中、社福会計特有の項目のみチェックします。',
              type: 'text'
            },
            {
              text: `<span class="marker">「誰かにチェックしてほしい気持ち」</span> &emsp; <span class="marker">「コストをかけたくない気持ち」</span>`,
              type: 'text'
            },
            {
              text: '担当者の願いを両方叶えます。',
              type: 'text'
            }
          ],
          pointList: [
            '貸借バランス',
            '貸借対照表と資金収支計算書の整合性',
            '貸借対照表と事業活動計算書の整合性',
            '固定資産科目と固定資産台帳',
            '積立金',
            '拠点区分間の資金移動',
            '月次推移試算表'
          ],
          price: [
            {
              title: '報酬',
              desc: `※拠点数により料金は変動します。`,
              priceList: [
                {
                  term: '11,000円 / 月',
                  desc: '（1施設1事業）'
                }
              ]
            }
          ]
        }
      }
    }
  }
}
</script>
