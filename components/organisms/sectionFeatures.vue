<template lang="pug">
  section.features
    .features__wrap
      h2.features__header
        .features-header
          .features-header__balloon
            img.balloon(src="~assets/img/features/balloon.png" alt="ここに強い！")
          .features-header__title
            | シリングが社会福祉法人に強い<span>3</span>つの理由
      .features__content
        .features-item
          .features-item__item(v-for="(item, index) in featuresItems" :key="index")
            .features-item__header
              .features-item__icon
              .features-item__number
                | 理由{{index + 1}}
              .features-item__title
                | {{item.title}}
            .features-item__desc(v-html="item.desc")
      .movie__content
        .movie-item
          .
            <iframe width="450" height="300" src="https://www.youtube.com/embed/d1x04l6kCd0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        .movie-item
          .
            <iframe width="450" height="300" src="https://www.youtube.com/embed/HFuliXysMMw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      .movie__btn
        p.button-area
          a(href="https://www.youtube.com/channel/UCcx8Yc7aUyvoTbUHFPmfapQ/featured") セミナー動画をみる
        

          

</template>

<script>
export default {
  data() {
    return {
      featuresItems: [
        {
          title: 'ちょっぴり監査に強い',
          desc: `行政の特別職として<br />
          <span class="features-dashed">会計指導監査を担当していた
          チーフマネージャー</span>がいるから
          ちょっぴり監査に強い`
        },
        {
          title: 'ちょっぴり実務に強い',
          desc: `社会福祉法人に特化して<br />
          <span class="features-dashed">複数の施設を担当している</span>から
          ちょっぴり実務に強い`
        },
        {
          title: '現場との関係性が強い',
          desc: `書籍で学んだ知識を会計担当者へ
          <span class="features-dashed">押しつけたりしない</span>から<br />
          現場との関係性が強い`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  padding: 110px 0;
  box-sizing: border-box;
  background-image: url(~assets/img/features/bg.jpg);
  background-size: 100% 100%;
  &__wrap {
    @include limitter;
  }
  &__header {
    margin-bottom: 80px;
  }
}
.features-header {
  position: relative;
  text-align: center;
  width: 620px;
  margin: auto;
  @include max-screen($tablet-break-point) {
    width: 100%;
  }
  &__balloon {
    position: absolute;
    width: 163px;
    transform: rotate(-15deg);
    left: -100px;
    top: -20px;
    @include max-screen($tablet-break-point) {
      left: -20px;
    }
    @include max-screen($break-point: 600px) {
      top: -35px;
      left: 0;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__title {
    font-size: 3rem;
    letter-spacing: 0.06em;
    font-weight: 500;
    line-height: 160%;
    @include max-screen($tablet-break-point) {
      font-size: 2.6rem;
    }
    @include max-screen($mobile-break-point) {
      font-size: 2rem;
    }
    span {
      font-size: 6rem;
      @include max-screen($tablet-break-point) {
        font-size: 5rem;
      }
      @include max-screen($mobile-break-point) {
        font-size: 3.8rem;
      }
    }
  }
}
.features-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 930px;
  margin: auto;
  @include max-screen($tablet-break-point) {
    flex-direction: column;
  }
  &__item {
    width: 297px;
    border-radius: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid $green;
    background: #fff;
    padding: 13px 26px 26px;
    margin: 0 5px;
    @include max-screen($tablet-break-point) {
      width: 100%;
      margin: 0 auto 20px;
      flex-direction: row;
      align-items: center;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__header {
    text-align: center;
    @include max-screen($tablet-break-point) {
      width: 40%;
      margin-right: 10px;
    }
  }
  &__icon {
    height: 46px;
    width: 43px;
    background-image: url(~assets/img/features/icon.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto 11px;
    @include max-screen($tablet-break-point) {
      width: 30px;
      height: 30px;
    }
  }
  &__number {
    margin: 0 auto 15px;
    font-weight: 800;
    color: $text-white;
    background: $green;
    display: inline-block;
    text-align: center;
    padding: 2px 20px;
    box-sizing: border-box;
    border-radius: 30px;
  }
  &__title {
    margin-bottom: 18px;
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: $green;
    line-height: 130%;
    @include max-screen($tablet-break-point) {
      font-size: 1.8rem;
    }
  }
  &__desc {
    font-size: 1.6rem;
    letter-spacing: 0.04em;
    line-height: 200%;
    @include max-screen($tablet-break-point) {
      width: 60%;
    }
  }
}

.movie{
  &__content{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 50px 20px 0;
  }
  &-item{
    @include max-screen($tablet-break-point) {
      margin: 0 0 30px;
    }
    iframe{
      @include max-screen($tablet-break-point) {
        width: 100%;
        height: auto;
      }
    }
  }
  &__btn{
    .button-area{
      margin: 40px 0 0 0;
      a{
        display: inline-flex;
        flex-direction: row;
        color: #fff;
        background: #96B54F;
        border-radius: 44px;
        padding: 15px 40px;
        box-sizing: border-box;
        font-size: 1.6rem;
        letter-spacing: 0.06em;
        font-weight: 800;
      }
    }
  }
}
</style>

<style lang="scss">
.features-dashed {
  border-bottom: 1px dashed $orange;
}
</style>
