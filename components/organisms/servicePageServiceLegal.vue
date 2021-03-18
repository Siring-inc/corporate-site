<template lang="pug">
.service-list
  .service-list__item(v-for="(item, index) in service" :key="index" :id="item.id")
    .service-item
      .service-item__header
        serviceHeader(:headerData="item.header")
      .service-item__content
        .service-content(v-for="(item, index) in item.content" :key="index")
          .service-content__text(v-if="item.type === 'text'" v-html="item.text")
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
// import servicePointList from '~/components/molecules/servicePointList'
import serviceHeader from '~/components/molecules/serviceHeader'

export default {
  components: {
    priceArea,
    // servicePointList,
    serviceHeader
  },
  data() {
    return {
      service: {
        serviceLegal: {
          id: 'serviceLegal',
          header: {
            title: '法定監査立会',
            //read: `忙しくて経理業務がどうしても後回しになってしまう法人様や
            //<br />専門的な社福会計が苦手な担当者様をサポートします。`
          },
          content: [
            {
              text:
                `法定監査に立ち会わせていただきます。<br/> 
                行政担当者及び立会の公認会計士の疑問に見解を述べさせていただきます。 <br/> 
                不合理な指摘があった場合にはその場で交渉させていただきます。<br/>  
                また、文書指摘があった場合には改善（回答）方法をアドバイスさせていただきます。`,
              type: 'text'
            }
          ],
          price: [
            {
              title: `報酬は頂きません。実費交通費のみご請求させていただきます`,
              // desc: `※セグメント・拠点数により報酬は変動します。<br />※配賦基準数により報酬は変動します。`,
            }
          ]
          
        }
      }
    }
  }
}
</script>
