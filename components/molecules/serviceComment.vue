<template lang="pug">
  .service-header__comment(v-html='commentData.text')
</template>

<script>
export default {
  props: {
    commentData: {
      default() {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.service-header__comment {
  position: absolute;
  display: inline-block;
  margin: -0.9em -2px 5.5em -254px;
  padding: 1.7rem 0.5rem;
  width: 7rem;
  height: 7rem;
  line-height:1.3rem;
  text-align: center;
  color: #FFF;
  font-size: 1.2rem;
  font-weight: bold;
  background: $red;
  border-radius: 50%;
  box-sizing: border-box;
  @include max-screen($tablet-break-point) {
    margin: -0.1em -2px 5.5em -203px;
    width: 6rem;
    height: 6rem;
    line-height:1rem;
    font-size: 1rem;
  }
  @include max-screen($mobile-break-point) {
    margin: -0.9em -2px 5.5em -169px;
  }
  @include max-screen($small-mobile-break-point) {
    margin: -1.7rem -2px 5.5em -144px;
  }
}
.service-header__comment:before {
  content: "";
  position: absolute;
  bottom: 4px;
  right: -14px;
  margin-top: -15px;
  border: 10px solid transparent;
  border-left: 25px solid $red;
  z-index: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  @include max-screen($tablet-break-point) {
    bottom: 1px;
    right: -15px;
  }
  @include max-screen($mobile-break-point) {
    bottom: 4px;
    right: -14px;
    transform: rotate(38deg);
  }
  @include max-screen($small-mobile-break-point) {
    border: 7px solid transparent;
    border-left: 17px solid #D16565;
  }
}
</style>
