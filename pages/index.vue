<template>
  <section class="container">
    <div>
      <h1 class="title">
        news-reader
      </h1>
      <b-row v-for="(chunk, rowIndex) in articleChunks(4)" :key="rowIndex">
        <b-col cols="3" v-for="(article, colIndex) in chunk" :key="colIndex">
          <nuxt-link
            :to="{ name: 'articles-slug', params: { slug: urlSlug(article.title) }, query: { articleUrl: encodeURI(article.url) }}"
          >
            {{ article.title }}
            <img class="articleImage" :src ="article.urlToImage" />
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import slug from 'slug'

export default {
  computed: mapGetters({
    articles: 'articles/getArticles'
  }),

  methods: {
    articleChunks(size) {
      return _.chunk(this.articles, size)
    },
    urlSlug(url) {
      return slug(url)
    }
  },

  components: {
  }
}
</script>

<style scoped>
.articleImage {
  max-width: 100%
}
</style>
