<template>
  <div>
    <h1>Article</h1>
    {{ viewingArticleContent }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {


  computed: {
    ...mapGetters({
      viewingArticleContent: 'articles/getViewingArticleContent',
    })
  },

  methods: {
  },

  beforeMount() {
    this.$store.dispatch('articles/fetchContent', this.$route.query.articleUrl)
  },

  components: {
  }
}
</script>