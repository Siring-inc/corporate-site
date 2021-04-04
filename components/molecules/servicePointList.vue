<template lang="pug">
.service-point
  .service-point__item(v-for="(item, index) in pointList" :key="index")
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 71rem;
  margin: auto;
  &__item {
    width: 50%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  &__icon {
    display: block;
    width: 23px;
    height: 28px;
    margin-right: 7px;
    margin-left: 19px;
    background-image: url(~assets/img/icon/icon-flower-blue.png);
    background-repeat: no-repeat;
    background-size: contain;
    @include max-screen($mobile-break-point) {
      margin-left: 0px;
    }
  }
  &__label {
    font-size: 1.8rem;
    line-height: 173%;
    @include max-screen($tablet-break-point) {
      font-size: 1.2rem;
      flex: 1;
    }
    @include max-screen($mobile-break-point) {
      flex: 1;
    }
  }
}
</style>
