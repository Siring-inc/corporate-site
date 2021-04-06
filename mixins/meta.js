export default {
  head() {
    const head = { meta: [] }

    if (typeof this.meta === 'undefined') {
      return head
    }

    // title, og:title
    if (typeof this.meta.title !== 'undefined') {
      const title = `${this.meta.title}`
      head.title = title
      head.meta.push({ hid: 'og:title', property: 'og:title', content: title })
    }

    // description, og:description
    if (
      typeof this.meta.description !== 'undefined' ||
      this.meta.description !== null
    ) {
      head.meta.push({
        hid: 'description',
        name: 'description',
        content: this.meta.description
      })
      head.meta.push({
        hid: 'keyword',
        property: 'keyword',
        content: this.meta.keyword
      })
      head.meta.push({
        hid: 'og:description',
        property: 'og:description',
        content: this.meta.description
      })
    }


    // ページタイプ
    if (typeof this.meta.type !== 'undefined') {
      head.meta.push({
        hid: 'og:type',
        property: 'og:type',
        content: this.meta.type
      })
    } else if (this.$route.path === '/') {
      head.meta.push({
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      })
    }

    // OGP画像URL
    if (
      typeof this.meta.ogImage !== 'undefined' ||
      this.meta.ogImage !== null
    ) {
      head.meta.push({
        hid: 'og:image',
        property: 'og:image',
        content: this.meta.ogImage
      })
    }

    // ページURL
    const url = `${process.env.BASE_URL}${this.$route.path}`
    head.meta.push({ hid: 'og:url', property: 'og:url', content: url })

    return head
  }
}
