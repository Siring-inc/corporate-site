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
      // width: 50%;
    }
  }
}
</style>
