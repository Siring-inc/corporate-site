<template lang="pug">
.service-point
  .service-point__head(v-html="pointList.head")  
  .service-point__frame
    .service-point__item(v-for="(item, index) in pointList.content" :key="index")
      .service-point__icon
      .service-point__label
        | {{item}}
</template>

<script>
export default {
  props: {
    pointList: {
      default() {
        return {}
      },
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.service-point {
  // max-width: 710px;
  // margin: 0 auto;
  &__frame{
     max-width: 50%;
     margin: 0 auto;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    align-items: center;
  }
  &__item {
    // width: 100%;
    display: flex;
    // align-items: center;
    margin-bottom: 10px;
  }
  &__icon {
    // display: block;
    width: 23px;
    height: 28px;
    margin-right: 7px;
    background-image: url(~assets/img/icon/icon-checkbox.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__label {
    font-size: 1.4rem;
    line-height: 120%;
    @include max-screen($tablet-break-point) {
      font-size: 1.2rem;
    }
  }
  &__head{
    font-size: 2rem;
    color: $red;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
    margin-top: 40px;
    text-align: center;
    @include max-screen($tablet-break-point) {
      font-size: 3.2rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 2.4rem;
    }
  }
  /deep/ hr {
    background-color: $red;
    border-color: $red;
    width: 4rem;
    height: 0.3rem;
    border-radius: 1rem;
    display: block;
    @include max-screen($mobile-break-point) {
      display: block;
    }
  }
}
</style>
