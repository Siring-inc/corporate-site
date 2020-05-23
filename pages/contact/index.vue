<template lang="pug">
div
  breadcrumbs(:breadcrumbs="breadcrumbs" :isShow="false")
  .page
    .page__wrap
      .page__header
        pageHeader(:titleData="pageTitle")
      .page__content
        .section__header
          sectionTitle(:titleData="titleDataContact")
        .section__content
          formFields(:formData="formData")
      #contactTel.page__content
        .section__header
          sectionTitle(:titleData="titleDataTel")
        .section__content
          .contact-tel
            .contact-tel__wrap
              .contact-tel__number
                | 06-6339-7477
              .contact-tel__note
                | お電話での受付時間は、平日AM10:00～PM5:00までです。
</template>

<style lang="scss" scoped>
.contact-tel {
  background: #fff;
  border-radius: 20px;
  border: 1px dotted $green-lighten;
  padding: 20px;
  box-sizing: border-box;
  &__wrap {
    display: flex;
    flex-direction: column;
  }
  &__number {
    font-size: 2.4rem;
    color: $green-lighten;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
  }
  &__note {
    font-size: 1.4rem;
    letter-spacing: 0.04em;
    line-height: 140%;
    text-align: center;
  }
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
        type: 'article',
        url: `${process.env.BASE_URL}/contact/`
      },
      pageTitle: {
        title: 'お問い合わせ',
        desc: `弊社の各種サービス（記帳代行業務その他）に関するお問い合わせ、<br class="br" />お見積もりのご依頼などは下記メールフォームまたはお電話にて承ります。`
      },
      titleDataContact: {
        title: 'メールでお問い合わせ'
      },
      titleDataTel: {
        title: '電話でお問い合わせ'
      },
      formData: [
        {
          inputName: '法人名',
          plaseholder: '法人名',
          required: true,
          inputType: 'text',
          name: '法人名'
        },
        {
          inputName: 'メールアドレス',
          plaseholder: 'sample@mail.com',
          required: true,
          inputType: 'email',
          name: 'メールアドレス'
        },
        {
          inputName: 'お名前',
          plaseholder: '田中 太郎',
          required: false,
          inputType: 'text',
          name: 'お名前'
        },
        {
          inputName: '件名',
          plaseholder: 'お問い合わせタイトル',
          required: true,
          inputType: 'text',
          name: '件名'
        },
        {
          inputName: '本文',
          plaseholder: 'お問い合わせの内容を入力してください。',
          required: true,
          inputType: 'textarea',
          name: '本文'
        }
      ]
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
          }
        ]
      }
    }
  }
}
</script>
