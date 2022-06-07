<template lang="pug">
div
  privacyPageInfo
</template>

<script>
import Meta from '~/assets/mixins/meta'
import breadcrumbs from '~/components/molecules/breadcrumbs'
import companyPageMessage from '~/components/organisms/companyPageMessage'
import privacyPageInfo from '~/components/organisms/privacyPageInfo'
import sectionContact from '~/components/organisms/sectionContact'

export default {
  components: {
    breadcrumbs,
    companyPageMessage,
    privacyPageInfo,
    sectionContact
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '個人情報に関する取り扱い',
        description: `株式会社シリングの個人情報に関する取り扱い。専門性と合理的な価格を実現します`,
        keyword: `社会福祉法人会計,記帳代行,経理事務代行,経理のアウトソーシング,外部委託,業務委託,会計監査`,
        type: 'article',
        url: `${process.env.BASE_URL}/privacy/`
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
            name: '個人情報に関する取り扱い',
            url: '/privacy'
          }
        ]
      }
    }
  }
}
</script>
