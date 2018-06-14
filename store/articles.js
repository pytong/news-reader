export const state = () => ({
  articles: []
})

export const mutations = {
  set(state, articles) {
    state.articles = articles
  }
}

export const getters = {
  get(state) {
    return state.articles
  }
}
