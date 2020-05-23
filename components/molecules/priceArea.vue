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
</template>

<script>
import priceItem from '~/components/atoms/priceItem.vue'

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
  border: 2px dotted $red;
  padding: 16px;
  box-sizing: border-box;
  max-width: 665px;
  margin: auto;
  &__item {
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid $red;
    @include max-screen($tablet-break-point) {
      flex-direction: column;
    }
    &:last-child {
      border-bottom: none;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    width: 500px;
    @include max-screen($tablet-break-point) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  &__right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__title {
    font-size: 2rem;
    line-height: 160%;
    margin-bottom: 4px;
    color: $red;
    font-weight: 500;
  }
  &__desc {
    font-size: 1.2rem;
    line-height: 140%;
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
