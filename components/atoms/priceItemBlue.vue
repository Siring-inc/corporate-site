<template lang="pug">
.price-item
  .price-item__term
    | {{priceItem.term}}
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
  text-align: right;
  width: 340px;
  margin-right: 10px;
  @include max-screen($tablet-break-point) {
    width: 100%;
    text-align: left;
  }
  
  &__term {
    font-size: 2.2rem;
    line-height: 160%;
    width: 292px;
    font-weight: 500;
    @include max-screen($tablet-break-point) {
      font-size: 1.8rem;
      width: 100%;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.2rem;
      width: auto;
    }
  }
  &__desc {
    width: 100%;
    font-size: 2.2rem;
    line-height: 160%;
    font-weight: normal;
    @include max-screen($tablet-break-point) {
      font-size: 1.8rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.2rem;
      width: auto;
    }
  }
}
</style>
