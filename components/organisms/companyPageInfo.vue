<template lang="pug">
.page
  .page__wrap
    .page__header
      pageHeader(:titleData="pageTitle")
    .page__content
      .section__header
        sectionTitle(:titleData="titleDataInfo")
      .section__content
        sectionCompanyInfo
      .section__header
        sectionTitle(:titleData="titleDataHistory")
      .section__content
        sectionCompanyHistory


</template>

<script>
import sectionTitle from '~/components/atoms/sectionTitle'
import sectionCompanyInfo from '~/components/molecules/companyInfo'
import sectionCompanyHistory from '~/components/molecules/companyHistory'
import pageHeader from '~/components/atoms/pageHeader.vue'

export default {
  components: {
    sectionTitle,
    sectionCompanyInfo,
    sectionCompanyHistory,
    pageHeader
  },
  data() {
    return {
      pageTitle: {
        title: '会社情報'
      },
      titleDataInfo: {
        title: '会社概要'
      },
      titleDataHistory: {
        title: '沿革'
      }
    }
  }
}
</script>
