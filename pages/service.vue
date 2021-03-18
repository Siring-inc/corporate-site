<template lang="pug">
div
  breadcrumbs(:breadcrumbs="breadcrumbs" :isShow="false")
  sectionTopMessage
  sectionNav
  .section.section--bg-red
    .section__wrap
      sectionService
      sectionServiceLegal
      sectionServiceFinancial
  sectionAbout
  sectionContact
  .float-contact
    .float-contant__wrap
      .float-contact__header
        | まずはお気軽にご相談ください。
      .float-contact__content
        .float-contact__left
          nuxt-link.float-contact__button(to="/contact")
            | メールでお問い合わせ
        .float-contact__right
          nuxt-link.float-contact__button.float-contact__button--tel(to="/contact#contactTel")
            | 電話でお問い合わせ
          .float-contact-list
            .float-contact-list__item
              .float-tel
                .float-tel__title
                  .float-tel__icon.float-tel__icon--tel
                  .float-tel__label
                    | TEL
                .float-tel__number
                  | 06-6339-7477
            .float-contact-list__item
              .float-tel
                .float-tel__title
                  .float-tel__icon.float-tel__icon--fax
                  .float-tel__label
                    | FAX
                .float-tel__number
                  | 06-6339-7286
          .float-note
            | お電話での受付時間は、AM10:00〜PM5:00です。
</template>

<style lang="scss" scoped>
.float-note {
  font-size: 1rem;
  text-align: right;
  margin-top: 10px;
  @include max-screen($tablet-break-point) {
    display: none;
  }
}
.float-contact {
  position: fixed;
  bottom: 20px;
  background: $green-lighten;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  width: 90%;
  max-width: 1360px;
  margin: auto;
  left: 0;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
  @include max-screen($tablet-break-point) {
    padding: 10px;
  }
  @include max-screen($mobile-break-point) {
    width: 96%;
    max-width: 400px;
  }
  &__wrap {
    @include limitter;
  }
  &__header {
    color: $text-white;
    font-weight: 700;
    margin-bottom: 12px;
    text-align: center;
    @include max-screen($tablet-break-point) {
      display: none;
    }
  }
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @include max-screen($mobile-break-point) {
      justify-content: space-around;
    }
  }
  &__button {
    display: inline-block;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    line-height: 48px;
    height: 48px;
    color: $green-lighten;
    width: 300px;
    margin-right: 20px;
    font-weight: 700;
    @include max-screen($tablet-break-point) {
      width: 180px;
      font-size: 1.4rem;
      height: 32px;
      line-height: 32px;
    }
    @include max-screen($mobile-break-point) {
      width: 140px;
      font-size: 1.2rem;
      margin: auto;
    }
    &--tel {
      display: none;
      @include max-screen($tablet-break-point) {
        display: block;
      }
    }
  }
}
.float-contact-list {
  display: flex;
  flex-direction: row;
  @include max-screen($tablet-break-point) {
    display: none;
  }
  &__item {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.float-tel {
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
  @include max-screen($tablet-break-point) {
    flex-direction: column;
  }
  &__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
  }
  &__icon {
    display: block;
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 8px;
    &--tel {
      background-image: url(~assets/img/icon/tel-white.png);
    }
    &--fax {
      background-image: url(~assets/img/icon/fax-white.png);
    }
  }
  &__label {
    font-size: 1.4rem;
    color: $text-white;
  }
  &__number {
    font-size: 1.8rem;
  }
}
</style>

<script>
import Meta from '~/assets/mixins/meta'
import breadcrumbs from '~/components/molecules/breadcrumbs'
import sectionContact from '~/components/organisms/sectionContact'
import sectionTopMessage from '~/components/organisms/servicePageTopMessage'
import sectionNav from '~/components/molecules/sectionNav'
import sectionService from '~/components/organisms/servicePageServiceLight'
import sectionServiceLegal from '~/components/organisms/servicePageServiceLegal'
import sectionServiceFinancial from '~/components/organisms/servicePageServiceFinancial'
import sectionAbout from '~/components/organisms/servicePageAbout'

export default {
  components: {
    breadcrumbs,
    sectionContact,
    sectionTopMessage,
    sectionNav,
    sectionService,
    sectionServiceLegal,
    sectionServiceFinancial,
    sectionAbout
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '会計業務サポート',
        description: `現金や預金などの管理や経営の意思決定は法人で行い、面倒な伝票作成はシリングにお任せください。`,
        keyword: `社会福祉法人会計,記帳代行,経理事務代行,経理のアウトソーシング,外部委託,業務委託,会計監査`,
        type: 'article',
        url: `${process.env.BASE_URL}/service/`
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
            name: '会計業務サポート',
            url: '/service'
          }
        ]
      }
    }
  }
}
</script>
