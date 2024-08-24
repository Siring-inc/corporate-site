<template lang="pug">
.page
  .page__wrap
    .page__header
      pageHeader(:titleData="pageTitle")
    .page__content
      //- .section__header
      //-   sectionTitle(:titleData="titleDataInfo")
    .privacy
      p 株式会社シリング（以下「当社」という）は､個人情報保護の重要性に鑑み、また､当社が行う業務などに対する社会の信頼性をより向上させるため、個人情報の保護に関する法律（個人情報保護法）その他の関連法令などを遵守して、以下の要領に沿って、個人情報を適正に取り扱い、安全管理について適切な措置を講じます。
        br
        | 
        br
      p （1）当社の名称・住所・代表者の氏名
        br
        | 株式会社シリング　大阪府吹田市江坂町1-14-33 ＴＣＳビル 
        br
        | 代表取締役社長　柳澤一生
        br
        | 
        br
      p （2）個人情報の取得・利用
        br
        | 当社は、利用目的を公表又は通知する（直接ご本人様から書面に記載された個人情報を取得する場合にはあらかじめ利用目的を明示する）等、適正な手段により個人情報を取得し、利用目的の達成に必要な範囲内でこれを利用します。また、個人情報の第三者提供等については、お客様から事前に同意を得た上で行います。
        br
        | 
        br
      p （3）個人情報の利用目的
        br
        | 当社は、取得した個人情報を以下の目的で利用します。
        br
        | ①経営効率の改善・福利厚生制度の設計等の経営指導業務
        br
        | ②顧客からの要望による税理士等の専門家の紹介業務
        br
        | ③法人・個人向けセミナーの企画・立案・実施
        br
        | ④ファイナンシャルプランニング業務
        br
        | ⑤下記の保険会社より委託を受けて行う生命保険商品のコンサルティング、販売業務
        br
        | 【生命保険会社】大同生命保険株式会社
        a(href="http://www.daido-life.co.jp") (http://www.daido-life.co.jp)
        br
        | ※保険会社の個人情報の利用目的は、各社のホームページに記載してあります。
        br
        | ⑥その他、上記に関連する業務
        br
        | 
        br
      p （4）安全管理措置について
        br
        | 当社は、取り扱う個人データの漏えい､滅失またはき損の防止その他の個人データの安全管理のため、安全管理に関する取扱規定等の整備および実施体制の整備等、十分なセキュリティ対策を講じるとともに、利用目的の達成に必要とされる正確性・最新性を確保するために適切な措置を講じます。
        br
        | また、個人データを従業員に取り扱わせるに当たっては、個人情報の適正な扱いを周知徹底するとともに適正な教育や必要な監督を行います。
        br
        | 個人データの取り扱いを委託する場合には、適切な安全管理措置を講じている協力会社を選定し、委託先に対し必要かつ適切な監督を行います。
        br
        | 
        br
      p （5）個人データの第三者への提供
        br
        | 当社は、個人データの第三者に提供するにあたり、以下の場合を除き、ご本人の同意なく第三者に個人データを提供しません。
        br
        | ■	法令に基づく場合
        br
        | ■	利用目的の達成に必要な範囲内において外部委託した場合
        br
        | ■	人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき。
        br
        | ■	 公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、公衆衛生の向上又は児童の健全な育成の推進のために特に必要があるとき、若しくは国の機関、地方公共団体又はその委託を受けたものが法令の定める事務を遂行することに対して協力する必要がある場合にあって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。
        br
        | 
        br
      p （6）当社に対する請求・お問合せ
        br
        | 当社は、その保有個人情報について開示・訂正等のご請求があった場合は、請求者がご本人であることを確認させていただいたうえで、業務の適正の実施に著しい支障をきたす等、特別の理由のない限り対応させていただきます。開示・請求等のご請求のほか、当社の個人情報の取扱いに関するご照会は、下記窓口までお問合せください。
        br
      p.privacy__right 【お問合せ先】
        br
        | 株式会社シリング
        br
        | 個人情報保護担当
        br
        | TEL06-6339-7480
        br
        | 
        br
        | 以上
</template>

<script>
import sectionTitle from '~/components/atoms/sectionTitle'
import sectionCompanyInfo from '~/components/molecules/companyInfo'
import sectionCompanyHistory from '~/components/molecules/companyHistory'
import pageHeader from '~/components/atoms/pageHeader.vue'

export default {
  components: {
    sectionTitle,
    sectionCompanyInfo,
    sectionCompanyHistory,
    pageHeader
  },
  data() {
    return {
      pageTitle: {
        title: '個人情報に関する取り扱い'
      },
      titleDataInfo: {
        title: '会社概要'
      },
      titleDataHistory: {
        title: '沿革'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.privacy {
  line-height: 1.6;
  &__right{
    margin-top: 20px;
    text-align: right;
  }
}
</style>

