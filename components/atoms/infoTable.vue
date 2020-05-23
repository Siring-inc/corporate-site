<template lang="pug">
  .company-info
    .company-info__term
      | {{tableData.title}}
    .company-info__desc(v-html="tableData.desc")
</template>

<script>
export default {
  props: {
    tableData: {
      default() {
        return {}
      },
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
.company-info {
  display: flex;
  @include max-screen($break-point: 600px) {
    flex-direction: column;
    border-bottom: 1px solid lighten($text-black, 60%);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  &__term {
    font-size: 1.8rem;
    letter-spacing: 0.04em;
    line-height: 140%;
    margin-right: 70px;
    text-align: right;
    width: 230px;
    @include max-screen($tablet-break-point) {
      font-size: 1.6rem;
    }
    @include max-screen($break-point: 600px) {
      width: 100%;
      text-align: left;
      font-size: 1.4rem;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  &__desc {
    font-size: 1.8rem;
    line-height: 140%;
    text-align: left;
    width: 100%;
    @include max-screen($tablet-break-point) {
      font-size: 1.6rem;
    }
  }
}
</style>
