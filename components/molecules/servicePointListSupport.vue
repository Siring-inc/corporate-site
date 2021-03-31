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
     margin-bottom: 6.9rem;
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
    width: 40px;
    height: 38px;
    margin-right: 5px;
    margin-left: 19px;
    margin-top: -3px;
    background-image: url(~assets/img/icon/icon-checkbox.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__label {
    margin-top: 1.1rem;
    font-size: 1.6rem;
    line-height: 120%;
    @include max-screen($tablet-break-point) {
      font-size: 1.2rem;
    }
  }
  &__head{
    font-size: 2.4rem;
    color: $red;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
    margin-top: 53px;
    text-align: center;
    letter-spacing: 0.2rem;
    @include max-screen($tablet-break-point) {
      font-size: 3.2rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 2.4rem;
    }
    /deep/ hr {
      background-color: $red;
      border: none;
      width: 5rem;
      height: 0.5rem;
      border-radius: 2rem;
      display: block;
      margin-top: 1.9rem;
      @include max-screen($mobile-break-point) {
        display: block;
      }
    }
  }
}
</style>
