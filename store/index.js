import constant from '@/const'

const moment = require('moment')
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(constant.news_api_key)

export const actions =  {
  async nuxtServerInit({ commit }, { app }) {
    const yesterdayDate = moment().add(-1, 'days').format('YYYY-MM-DD')

    const { articles } = await newsapi.v2.topHeadlines({
      category: 'business',
      language: 'en',
      country: 'us',
      from: yesterdayDate,
      language: 'en',
      sortBy: 'popularity'
    })

    commit('articles/setArticles', articles)
  }
}