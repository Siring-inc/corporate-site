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
  &__frame{
     max-width: 53%;
     margin: 0 auto;
     margin-bottom: 6.9rem;
    align-items: center;
    @include max-screen($tablet-break-point) {
      max-width: 75%;
    }
    @include max-screen($mobile-break-point) {
      max-width: 100%;
    }
    @include max-screen($small-mobile-break-point) {
      max-width: 100%;
    }
  }
  &__item {
    display: flex;
    margin-bottom: 10px;
  }
  &__icon {
    width: 40px;
    height: 38px;
    margin-right: 5px;
    margin-left: 19px;
    margin-top: -3px;
    background-image: url(~assets/img/icon/icon-checkbox.png);
    background-repeat: no-repeat;
    background-size: contain;
    @include max-screen($mobile-break-point) {
      width: 20px;
      height: 18px;
    }
    @include max-screen($small-mobile-break-point) {
      width: 15px;
      height: 13px;
    }
  }
  &__label {
    margin-top: 1.1rem;
    font-size: 1.6rem;
    line-height: 120%;
    @include max-screen($tablet-break-point) {
      font-size: 1.2rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 8px;
      margin-top: 0.1rem;
    }
    @include max-screen($small-mobile-break-point) {
      font-size: 8px;
      margin-top: 0.1rem;
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
