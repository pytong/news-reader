<template>
  <div>
    <h1>Article</h1>
    {{ viewingArticleScreenshot }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    viewingArticleScreenshot: 'articles/getViewingArticleScreenshot'
  }),

  methods: {
    generateViewArticleScreenshot() {
      // const pageres = new Pageres({delay: 2})
      //   .src('yeoman.io', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
      //   .src('todomvc.com', ['1280x1024', '1920x1080'])
      //   .src('data:text/html;base64,PGgxPkZPTzwvaDE+', ['1024x768'])
      //   .dest(__dirname)
      //   .run()
      //   .then(() => console.log('done'));
    }
  },

  beforeMount() {
    this.generateViewArticleScreenshot()
  },

  components: {
  }
}
</script>