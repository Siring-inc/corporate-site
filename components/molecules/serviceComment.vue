<template lang="pug">
  .service-header__comment
  //- | {{headerData.text}}
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
    width:200px;
    height:180px;
    border-radius:50%;
    background:lightgreen;
    text-align:center;
    position:absolute;
    font-size:15px;
}
.service-header__comment ::after{
    position:absolute;
    content:"abc";
    border-top:40px solid lightgreen;
    border-right:30px solid transparent;
    top:155px;
    left:40px;
}
</style>
