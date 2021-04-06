import { NYTSearchParams } from './types'

const NYT_API_URL = 'https://api.nytimes.com'
const NYT_API_KEY = `api-key=${process.env.REACT_APP_NYT_API_KEY}`

const searchArticle = (params?: NYTSearchParams): string => {
  let searchArticleUrl = `${NYT_API_URL}/svc/search/v2/articlesearch.json?${NYT_API_KEY}`
  if (!params) return searchArticleUrl
  if (params.fq) searchArticleUrl = `${searchArticleUrl}&fq=${params.fq}`
  if (params.fl) searchArticleUrl = `${searchArticleUrl}&fl=${params.fl.join()}`
  if (params.q) searchArticleUrl = `${searchArticleUrl}&q=${params.q}`
  if (params.page) searchArticleUrl = `${searchArticleUrl}&page=${params.page}`

  return searchArticleUrl
}

export const NYT_ENDPOINTS = {
  SEARCH_ARTICLE: searchArticle,
}
