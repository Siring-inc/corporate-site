<template lang="pug">
.price-item
  .price-item__term(v-html="priceItem.term")
    //- | {{priceItem.term}}
  .price-item__desc
    | {{priceItem.desc}}
</template>

<script>
export default {
  props: {
    priceItem: {
      default() {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.price-item {
  display: inline-flex;
  flex-direction: row;
  width: 340px;
  @include max-screen($tablet-break-point) {
    width: 290px;
    text-align: left;
  }
  @include max-screen($mobile-break-point) {
    width: 100%;
    justify-content: space-between;
  }
  &__term {
    text-align: left;
    font-size: 2rem;
    line-height: 135%;
    width: 240px;
    margin-left: 25px;
    margin-top: 7px;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
      // width: 50%;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.2rem;
      margin-left: 0px;
      width: auto;
    }
    @include max-screen($small-mobile-break-point) {
      font-size: 1rem;
    }
    /deep/.pricenote{
      font-size: 1rem;
    }
  }
  &__desc {
    text-align: right;
    width: 100%;
    font-size: 2rem;
    line-height: 135%;
    margin-right: 11px;
    margin-top: 7px;
    @include max-screen($tablet-break-point) {
      font-size: 1.4rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.2rem;
      // margin-left: 115px;
      margin-right: 0;
      width: auto;
    }
    @include max-screen($small-mobile-break-point) {
      font-size: 1rem;
    }
  }
}
</style>
