<template lang="pug">
div
  breadcrumbs(:breadcrumbs="breadcrumbs" :isShow="false")
  .page.page--green
    .page__wrap
      .page__header
        pageHeader(:titleData="pageTitle")
      .page__content
        .section__header
          sectionTitle(:titleData="titleDataContact")
        .section__content
          .message
            | ご回答には数日を要する場合がございます。
            br
            | １０日以上経っても弊社担当者から連絡がない場合は、再度ご連絡ください。

</template>

<style lang="scss" scoped>
.message {
  font-size: 1.6rem;
  text-align: center;
  line-height: 140%;
  letter-spacing: 0.04em;
}
</style>

<script>
import Meta from '~/assets/mixins/meta'
import breadcrumbs from '~/components/molecules/breadcrumbs'
import sectionTitle from '~/components/atoms/sectionTitle'
import pageHeader from '~/components/atoms/pageHeader.vue'
import formFields from '~/components/molecules/formFields'

export default {
  components: {
    breadcrumbs,
    sectionTitle,
    pageHeader,
    formFields
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'お問い合わせ',
        description: `弊社の各種サービス（記帳代行業務その他）に関するお問い合わせ、お見積もりのご依頼などは下記メールフォームまたはお電話にて承ります。`,
        keyword: `社会福祉法人会計,記帳代行,経理事務代行,経理のアウトソーシング,外部委託,業務委託,会計監査`,
        type: 'article',
        url: `${process.env.BASE_URL}/contact/thanks`
      },
      pageTitle: {
        title: 'お問い合わせ'
      },
      titleDataContact: {
        title: 'メールの送信が完了しました。'
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
            name: 'お問い合わせ',
            url: '/contact'
          },
          {
            name: '送信が完了しました',
            url: '/thanks'
          }
        ]
      }
    }
  }
}
</script>
