<template lang="pug">
  .company-section
    .company-section__content
      tableList(:tableData="companyInfo")
</template>

<script>
import tableList from '~/components/molecules/tableList'

export default {
  components: {
    tableList
  },
  data() {
    return {
      companyInfo: [
        {
          title: '法人名',
          desc: '株式会社シリング'
        },
        {
          title: '代表取締役社長',
          desc: '柳澤 一生'
        },
        {
          title: '所在地',
          desc: '〒530-0041 大阪市北区天神橋2丁目北2-25 タキガワビル306号'
        },
        {
          title: 'TEL',
          desc: '06-6949-8303'
        },
        {
          title: 'FAX',
          desc: '06-6949-8304'
        },
        {
          title: '設立',
          desc: '平成4年 7月 1日'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.company-section {
  background: #fff;
  border-radius: 20px;
  border: 1px dashed $green-lighten;
  padding: 40px;
  box-sizing: border-box;
  max-width: 960px;
  margin: auto;
}
</style>
