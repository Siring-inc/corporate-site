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
  position: relative;
  display: inline-block;
  margin: 1.5em 15px 1.5em 0;
  padding: 0 5px;
  width: 90px;
  height: 90px;
  line-height:17px;
  text-align: center;
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
  background: $red;
  border-radius: 50%;
  box-sizing: border-box;
}
.service-header__comment:before {
  content: "";
  position: absolute;
  bottom: -8px;
  right: -8px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-left: 15px solid $red;
  z-index: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
