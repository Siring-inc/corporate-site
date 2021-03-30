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
  // margin: 1.5em 15px 1.5em 0;
  margin: -0.9em -2px 5.5em -254px;
  padding: 17px 5px;
  width: 70px;
  height: 70px;
  line-height:13px;
  text-align: center;
  color: #FFF;
  font-size: 12px;
  font-weight: bold;
  background: $red;
  border-radius: 50%;
  box-sizing: border-box;
}
.service-header__comment:before {
  content: "";
  position: absolute;
  bottom: 4px;
  right: -14px;
  margin-top: -15px;
  border: 10px solid transparent;
  // border: 15px solid transparent;
  border-left: 25px solid $red;
  // border-left: 15px solid $red;
  z-index: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
