<template lang="pug">
.service-list
  .service-list__item(v-for="(item, index) in service" :key="index" :id="item.id")
    .service-item
      .service-item__header
        serviceHeader(:headerData="item.header")
      .service-item__content
        .service-content(v-for="(item, index) in item.content" :key="index")
          .service-content__text(v-html="item.text")
      .service-item__frame(v-html="item.frame.text")
</template>

<style lang="scss" scoped>
.service-content {
  &__text {
    font-size: 1.7rem;
    // letter-spacing: 0.04em;
    line-height: 3.5rem;
    margin-bottom: 58px;
    text-align: center;
    /deep/ .marker {
      background:linear-gradient(transparent 50%, lighten($blue, 30%) 50%);
      font-size: 1.8rem;
      // line-height: 160%;
      font-weight: 400;
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
    /deep/ .markernohighlight{
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
}
.service-item_header {
    margin-bottom: 50px;
    @include max-screen($tablet-break-point) {
      margin-bottom: 30px;
    }
  }
.service-item__frame{
  background: #fff;
  border-radius: 20px;
  border: 2px dotted $blue;
  padding: 20px;
  box-sizing: border-box;
  max-width: 709px;
  margin: auto;
  font-size: 2rem;
  line-height: 160%;
  margin-bottom: 141px;
  color: $blue;
  font-weight: 500;
  }
</style>

<script>
import serviceHeader from '~/components/molecules/serviceHeaderBlue'

export default {
  components: {
    serviceHeader
  },
  data() {
    return {
      service: {
        serviceLegal: {
          id: 'serviceLegal',
          header: {
            title: '法定監査立会'
          },
          content: [
            {
              text:
                `<span class="markernohighlight">法定監査</span>に立ち会わせていただきます。<br/> 
                行政担当者及び立会の公認会計士の<span class="marker">「疑問に見解</span>を述べさせていただきます。 <br/> 
                不合理な指摘があった場合には<span class="marker">その場で交渉</span>させていただきます。<br/>  
                また、文書指摘があった場合には<span class="marker">改善（回答）方法</span>をアドバイスさせていただきます。`
            }
          ],
          frame: {
            text: '報酬は頂きません。実費交通費のみご請求させていただきます。'
          }
        }
      }
    }
  }
}
</script>
