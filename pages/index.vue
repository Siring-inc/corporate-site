<template lang="pug">
  div
    breadcrumbs(:breadcrumbs="breadcrumbs" :isShow="false")
    sectionHero
    sectionFeatures#sectionFeatures
    sectionReasons#sectionReasons
    sectionNews(:newsItems="newsItem")
    sectionContact
    sectionCompany
</template>

<script>
import Meta from '~/assets/mixins/meta'
import breadcrumbs from '~/components/molecules/breadcrumbs'
import sectionHero from '~/components/organisms/sectionHero'
import sectionFeatures from '~/components/organisms/sectionFeatures'
import sectionReasons from '~/components/organisms/sectionReasons'
import sectionNews from '~/components/organisms/sectionNews'
import sectionContact from '~/components/organisms/sectionContact'
import sectionCompany from '~/components/organisms/sectionCompany'
import { mapState } from 'vuex'

export default {
  components: {
    breadcrumbs,
    sectionHero,
    sectionFeatures,
    sectionReasons,
    sectionNews,
    sectionContact,
    sectionCompany
  },
  mixins: [Meta],
  computed: {
    ...mapState('modules/posts', ['newsItem']),
    breadcrumbs() {
      return {
        data: [
          {
            name: `トップ`,
            url: `/`
          }
        ]
      }
    }
  },
  created() {
    this.$store.dispatch('modules/posts/get_news')
  },
  head() {
    return {
      titleTemplate: null,
      title: '株式会社シリング'
    }
  }
}
</script>
