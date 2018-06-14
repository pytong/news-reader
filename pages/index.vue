<template>
  <section class="container">
    <div>
      <h1 class="title">
        news-reader
      </h1>
      <ul>
        <li v-for="(article, index) in articles" :key="index">
          <span>{{ article.title }}</span>
          <img :src ="article.urlToImage" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    articles: 'get_articles'
  }),
  components: {
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
