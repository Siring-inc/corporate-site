<template lang="pug">
  section.section
    .section__wrap
      h2.section__header
        .section__title
          sectionTitle(:titleData="titleData")
      .section__content
        companyInfo
</template>

<script>
import sectionTitle from '~/components/atoms/sectionTitle'
import companyInfo from '~/components/molecules/companyInfo'

export default {
  components: {
    sectionTitle,
    companyInfo
  },
  data() {
    return {
      titleData: {
        title: '会社情報'
      }
    }
  }
}
</script>
