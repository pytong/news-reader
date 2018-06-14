export const state = () => ({
  articles: []
})

export const mutations = {
  set_articles(state, articles) {
    console.log("sdsdsdsddsdd")
    state.articles = articles
  }
}

export const actions =  {
  async nuxtServerInit({ commit }, { app }) {
    const { articles } = await app.$axios.$get('https://newsapi.org/v2/everything?q=usa&apiKey=528fda8f85ce461fb3754e542d651b19')
    commit('set_articles', articles)
  }
}

export const getters = {
  get_articles(state) {
    return state.articles
  }
}
