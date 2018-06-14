<template>
  <section class="container">
    <div>
      <h1 class="title">
        news-reader
      </h1>
      <b-row v-for="(chunk, rowIndex) in articleChunks" :key="rowIndex">
        <b-col cols="3" v-for="(article, colIndex) in chunk" :key="colIndex">
          <span>{{ article.title }}</span>
          <img class="articleImage" :src ="article.urlToImage" />
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      articles: 'get_articles'
    }),
    articleChunks() {
      return _.chunk(this.articles, 4)
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
