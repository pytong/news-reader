export const state = () => ({
  articles: [],
  viewingArticle: null,
  viewingArticleScreenshot: null
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
  }
}
