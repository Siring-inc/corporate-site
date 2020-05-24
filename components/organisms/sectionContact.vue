<template lang="pug">
  section.section.section--bg-red
    .section__wrap
      h2.section__header
        .section__title
          sectionTitle(:titleData="titleData")
      .section__content
        .contacts
          .contacts__content
            .contacts__mail
              .contact-mail
                .contact-mail__text
                  | 記帳代行サービスについてなど、お気軽にご相談ください。
                nuxt-link.contact-mail__button(to="/contact")
                  | メールでお問い合わせ
          .contacts__content
            .contact-list
              .contact-list__item
                .contact-item
                  .contact-item__header
                    .contact-item__icon.contact-item__icon--tel
                    .contact-item__title
                      | TEL
                  .contact-item__content
                    .contact-item__number
                      | 06-6339-7477
              .contact-list__item
                .contact-item
                  .contact-item__header
                    .contact-item__icon.contact-item__icon--fax
                    .contact-item__title
                      | FAX
                  .contact-item__content
                    .contact-item__number
                      | 06-6339-7286


</template>

<script>
import sectionTitle from '~/components/atoms/sectionTitle'

export default {
  components: {
    sectionTitle
  },
  data() {
    return {
      titleData: {
        title: '資料請求・お問い合わせ'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  @include max-screen($tablet-break-point) {
    flex-direction: column;
  }
  &__item {
    margin: 0 10px;
    @include max-screen($tablet-break-point) {
      text-align: center;
      margin: 0 0 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.contacts {
  padding: 40px 0 0;
  @include max-screen($tablet-break-point) {
    padding-top: 0px;
  }
  &__content {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.contact-mail {
  text-align: center;
  &__text {
    font-size: 1.6rem;
    letter-spacing: 0.04em;
    line-height: 140%;
    margin-bottom: 20px;
  }
  &__button {
    display: inline-block;
    font-size: 2rem;
    color: $text-white;
    padding: 20px 80px;
    box-sizing: border-box;
    border-radius: 30px;
    box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.14);
    font-weight: 500;
    background: $red;
    @include max-screen($mobile-break-point) {
      font-size: 1.6rem;
      padding: 16px 20px;
      width: 100%;
    }
  }
}
.contact-item {
  border-radius: 20px;
  border: 1px dotted $red;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 25px 50px;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @include max-screen($tablet-break-point) {
    flex-direction: row;
    display: inline-flex;
    margin: auto;
  }
  @include max-screen($mobile-break-point) {
    flex-direction: column;
  }
  &__header {
    margin-bottom: 10px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    @include max-screen($tablet-break-point) {
      margin-right: 20px;
      margin-bottom: 0px;
    }
    @include max-screen($mobile-break-point) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  &__icon {
    display: inline-block;
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 25px;
    @include max-screen($tablet-break-point) {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
    &--tel {
      background-image: url(~assets/img/icon/tel.png);
    }
    &--fax {
      background-image: url(~assets/img/icon/fax.png);
    }
  }
  &__title {
    display: inline-block;
    font-size: 3.2rem;
    letter-spacing: 0.06em;
    line-height: 120%;
    font-weight: 500;
    @include max-screen($tablet-break-point) {
      font-size: 2.2rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.6rem;
    }
  }
  &__number {
    font-size: 3rem;
    letter-spacing: 0.06em;
    line-height: 140%;
    font-weight: 400;
    @include max-screen($tablet-break-point) {
      font-size: 2rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 1.6rem;
    }
  }
}
</style>
