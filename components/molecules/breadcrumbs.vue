<template>
  <div v-if="isShow" class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li
        v-for="(item, index) in breadcrumbs.data"
        :key="index"
        class="breadcrumbs__item"
      >
        <nuxt-link :to="item.url" class="breadcrumbs__link">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  &__list {
    display: flex;
    flex-direction: row;
    @include max-screen($break-point) {
      flex-wrap: wrap;
    }
  }
  &__link {
    padding: 4px 8px;
    transition-duration: 0.3s;
    border-radius: 4px;
    &:hover {
      background: $gray;
    }
  }
  &__item {
    margin-right: 20px;
    transition: all 0.2d;
    line-height: 140%;
    @include max-screen($break-point) {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
    &::after {
      content: '>';
      display: inline-block;
      padding-left: 20px;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    isShow: {
      default: true,
      type: Boolean
    }
  },
  jsonld() {
    const items = this.breadcrumbs.data.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.text
      }
    }))
    return {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items
    }
  }
}
</script>
