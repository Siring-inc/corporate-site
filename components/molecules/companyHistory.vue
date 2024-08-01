<template lang="pug">
  .company-section
    .company-section__content
      tableList(:tableData="companyInfo")
</template>

<script>
import tableList from '~/components/molecules/tableList'

export default {
  components: {
    tableList
  },
  data() {
    return {
      companyInfo: [
        {
          title: '平成 4年 7月',
          desc: '大野輝人税理士事務所の記帳代行会社として設立'
        },
        {
          title: '平成15年 9月',
          desc: `個人向けコンサルティング業務を開始<br />
          Ｆ＆Ｍパートナーズ税理士法人と業務提携`
        },
        {
          title: '平成17年',
          desc: `司法書士法人・社会保険労務士事務所と業務提携<br />
          Onestop Financial Serviceを実現`
        },
        {
          title: '平成20年 4月',
          desc: `社名を株式会社シリングに変更<br />
          士業とのネットワーク強化を図る`
        },
        {
          title: '平成24年 8月',
          desc: `代表取締役に柳澤一生が就任<br />
          若手士業との連携強化を図る`
        },
        {
          title: '平成24年 9月',
          desc: `学習塾に特化した帳簿作成代行業務を開始<br />
          鍼灸整骨院に特化した帳簿作成代行業務を開始`
        },
        {
          title: '平成26年 9月',
          desc: `社会福祉法人に特化したBPOサービスを開始`
        },
        {
          title: '令和6年 8月',
          desc: `業務のクラウド化を整備<br>本社機能を大阪市北区に移転`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.company-section {
  background: #fff;
  border-radius: 20px;
  border: 1px dashed $green-lighten;
  padding: 40px;
  box-sizing: border-box;
  max-width: 960px;
  margin: auto;
}
</style>
