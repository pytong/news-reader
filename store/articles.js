export const state = () => ({
  articles: [],
  viewingArticle: null,
  viewingArticleContent: null,
  viewingArticleScreenshot: null,
})

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setViewingArticle(state, article) {
    state.viewingArticle = article
  },
  setViewingArticleScreenshot(state, screenshotPath) {
    state.viewingArticleScreenshot = screenshotPath
  },
  setViewingArticleContent(state, content) {
    state.viewingArticleContent = content
  }
}

export const getters = {
  getArticles(state) {
    return state.articles
  },
  getViewingArticle(state) {
    return state.viewingArticle
  },
  getViewingArticleScreenshot(state) {
    return state.viewingArticleScreenshot
  },
  getViewingArticleContent(state) {
    return state.viewingArticleContent
  }
}

export const actions = {
  async fetchViewingArticleScreenshot(context, articleUrl) {
    const url = 'http://localhost:3001/news/screenshot'

    const { snapshotPath } = await this.$axios.$get(url, {
      params: {
        articleUrl: articleUrl
      }
    }, {
      headers: {'Access-Control-Allow-Origin': '*'}
    })
    context.commit('setViewingArticleScreenshot', snapshotPath)
  },

  async fetchContent(context, articleUrl) {
    const url = 'http://localhost:3001/news/content'

    const { content } = await this.$axios.$get(url, {
      params: {
        articleUrl: articleUrl
      }
    }, {
      headers: {'Access-Control-Allow-Origin': '*'}
    })

    context.commit('setViewingArticleContent', content)
  }
}

