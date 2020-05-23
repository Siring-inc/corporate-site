<template lang="pug">
  .company-info-list
    .company-info-list__item(v-for="(item, index) in tableData" :key="index")
      infoTable(:tableData="item")

</template>

<script>
import infoTable from '~/components/atoms/infoTable'

export default {
  components: {
    infoTable
  },
  props: {
    tableData: {
      default() {
        return []
      },
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.company-info-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 680px;
  @include max-screen($tablet-break-point) {
    width: 100%;
  }
  &__item {
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
