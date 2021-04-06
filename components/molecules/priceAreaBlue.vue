<template lang="pug">
.price
  .price__item(v-for="(item, index) in priceData" :key="index")
    .price__left
      .price__title
        | {{item.title}}
      .price__desc(v-if="item.desc" v-html="item.desc")
    .price__right
      .price-list
        .price-list__item(v-for="(item, indexPrice)  in item.priceList" :key="indexPrice")
          priceItem(:priceItem="item")
  .price__under(v-for="(item, index) in priceData" :key="index")
    .price__descmobile(v-html="item.descmobile")    
</template>

<script>
import priceItem from '~/components/atoms/priceItemBlue.vue'

export default {
  components: {
    priceItem
  },
  props: {
    priceData: {
      default() {
        return []
      },
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.price {
  background: #fff;
  border-radius: 20px;
  border: 2px dotted $blue;
  padding: 20px;
  box-sizing: border-box;
  max-width: 709px;
  margin: auto;
  margin-bottom: 48px;
  @include max-screen($mobile-break-point) {
    padding: 10px;
  }
  &__item {
    display: flex;
    flex-direction: row;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    width: 400px;
    @include max-screen($tablet-break-point) {
      width: 35%;
      margin-bottom: 8px;
    }
    @include max-screen($mobile-break-point) {
      margin-bottom: 0;
    }
  }
  &__right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @include max-screen($tablet-break-point) {
      width: 65%;
      margin-bottom: 8px;
      margin-left: 50px;
    }
    @include max-screen($mobile-break-point) {
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
  &__title {
    font-size: 2rem;
    line-height: 160%;
    margin-left: 12px;
    margin-bottom: 4px;
    color: $blue;
    font-weight: 500;
    @include max-screen($mobile-break-point) {
      font-size: 1.8rem;
      margin-left: 0px;
    }
  }
  &__desc {
    font-size: 1.2rem;
    line-height: 140%;
    margin-left: 12px;
    @include max-screen($mobile-break-point) {
      font-size: 1rem;
      margin-left: 0px;
      display: none;
    }
  }
  &__descmobile {
    display: none;
  @include max-screen($mobile-break-point) {
    display: block;
    font-size: 1rem;
    margin-left: 37%;
    padding-bottom: 2%;
  }
}
}
.price-list {
  display: flex;
  flex-direction: column;
  @include max-screen($tablet-break-point) {
    width: 100%;
  }
  &__item {
    margin-bottom: 4px;
    text-align: right;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
