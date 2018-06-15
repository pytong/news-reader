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
    async fetchArticle () {
      const url = 'http://localhost:3001/news'
      const { content } = await this.$axios.$get(url, {
        params: {
          articleUrl: this.$route.query.articleUrl
        }
      }, {
        headers: {'Access-Control-Allow-Origin': '*'}
      })

      console.log(content)
    },
    generateViewArticleScreenshot() {

    }
  },

  beforeMount() {
    this.generateViewArticleScreenshot()
    this.fetchArticle()
  },

  components: {
  }
}
</script>