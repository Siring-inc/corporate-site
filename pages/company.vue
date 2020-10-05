<template lang="pug">
div
  breadcrumbs(:breadcrumbs="breadcrumbs" :isShow="false")
  companyPageMessage
  companyPageInfo
  sectionContact
</template>

<script>
import Meta from '~/assets/mixins/meta'
import breadcrumbs from '~/components/molecules/breadcrumbs'
import companyPageMessage from '~/components/organisms/companyPageMessage'
import companyPageInfo from '~/components/organisms/companyPageInfo'
import sectionContact from '~/components/organisms/sectionContact'

export default {
  components: {
    breadcrumbs,
    companyPageMessage,
    companyPageInfo,
    sectionContact
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '会社情報',
        description: `株式会社シリングの会社情報。専門性と合理的な価格を実現します`,
        keyword: `社会福祉法人会計,記帳代行,経理事務代行,経理のアウトソーシング,外部委託,業務委託,会計監査`,
        type: 'article',
        url: `${process.env.BASE_URL}/company/`
      }
    }
  },
  computed: {
    breadcrumbs() {
      return {
        data: [
          {
            name: `トップ`,
            url: `/`
          },
          {
            name: '会社情報',
            url: '/company'
          }
        ]
      }
    }
  }
}
</script>
