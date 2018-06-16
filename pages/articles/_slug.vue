<template>
  <div>
    <h1>Article</h1>
    {{ viewingArticleScreenshot }}
    {{ $route.query.articleUrl }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: mapGetters({
    viewingArticleScreenshot: 'articles/getViewingArticleScreenshot'
  }),

  methods: {
    async fetchContent () {
      const url = 'http://localhost:3001/news/content'

      const { content } = await this.$axios.$get(url, {
        params: {
          articleUrl: this.$route.query.articleUrl
        }
      }, {
        headers: {'Access-Control-Allow-Origin': '*'}
      })

      console.log(content)
    },
    async generateViewArticleScreenshot() {
      const url = 'http://localhost:3001/news/screenshot'

      const { snapshotPath } = await this.$axios.$get(url, {
        params: {
          articleUrl: this.$route.query.articleUrl
        }
      }, {
        headers: {'Access-Control-Allow-Origin': '*'}
      })

      console.log(snapshotPath)
    }
  },

  beforeMount() {
    this.generateViewArticleScreenshot()
    this.fetchContent()
  },

  components: {
  }
}
</script>