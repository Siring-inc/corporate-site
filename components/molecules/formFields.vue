<template lang="pug">
form.form(name="contact" method="POST" action="/contact/thanks" netlify)
  input(type="hidden" name="form-name" value="contact")
  .form__content
    label.form__column(v-for="(item, index) in formData" :key="index")
      .form__label
        .form__title
          | {{item.inputName}}
        .form__required(v-if="item.required")
          | 必須
      input.form__input(v-if="item.inputType !== 'textarea'" :type="item.inputType" :name="item.name" :placeholder="item.placeholder" :required="item.required")
      textarea.form__textarea(v-else :name="item.name" :placeholder="item.placeholder" :required="item.required" rows="6")
  .form__content
    button.form__button(type="submit")
      | この内容で問い合わせる
    .form__text
      | ご回答には数日を要する場合がございます。
      br
      | １０日以上経っても弊社担当者から連絡がない場合は、再度ご連絡ください。
</template>

<script>
export default {
  props: {
    formData: {
      default() {
        return []
      },
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__button {
    text-align: center;
    display: block;
    margin: 0 auto 20px;
    width: 380px;
    height: 60px;
    line-height: 60px;
    font-size: 2rem;
    letter-spacing: 0.04em;
    line-height: 110%;
    border-radius: 31px;
    background: $green-lighten;
    color: $text-white;
    font-weight: 500;
    box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.14);
    @include max-screen($tablet-break-point) {
      width: 100%;
      max-width: 300px;
    }
  }
  &__text {
    text-align: center;
    font-size: 1.4rem;
    line-height: 140%;
  }
  &__content {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__column {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 44px;
    @include max-screen($tablet-break-point) {
      flex-direction: column;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__label {
    display: inline-flex;
    flex-direction: row;
    width: 210px;
    margin-right: 10px;
    align-items: center;
    padding: 4px 0 0;
    box-sizing: border-box;
    @include max-screen($tablet-break-point) {
      margin-bottom: 8px;
    }
  }
  &__title {
    font-size: 1.6rem;
    letter-spacing: 0.04em;
  }
  &__required {
    display: inline-block;
    border-radius: 4px;
    padding: 2px 8px;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: $text-white;
    margin-left: 4px;
    background: $green-lighten;
    line-height: 140%;
  }
  &__input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid $green-lighten;
    height: 40px;
    padding: 10px 4px;
    box-sizing: border-box;
  }
  &__textarea {
    width: 100%;
    border-radius: 8px;
    border: 1px solid $green-lighten;
    padding: 10px 4px;
    box-sizing: border-box;
  }
}
</style>
