import { basicRequest } from 'Base/request'
import { NYT_ENDPOINTS } from '../nyt'
import { NYTBaseResponse, NYTSearchParams } from '../nyt/types'

export const fetchArticlesByQuery = (
  params?: NYTSearchParams
): Promise<NYTBaseResponse> =>
  basicRequest(NYT_ENDPOINTS.SEARCH_ARTICLE(params))
