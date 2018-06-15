<template>
  <section class="container">
    <div>
      <h1 class="title">
        news-reader
      </h1>
      <b-row v-for="(chunk, rowIndex) in articleChunks(4)" :key="rowIndex">
        <b-col cols="3" v-for="(article, colIndex) in chunk" :key="colIndex">
          <nuxt-link
            :to="{ name: 'articles-slug', params: { slug: urlSlug(article.title) }}"
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
import Pageres from 'pageres'

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
