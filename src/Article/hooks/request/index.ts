import { useQuery } from 'react-query'

import { fetchArticlesByQuery } from 'Article/api'

export const useQueryArticles = (q?: string, page?: string) =>
  useQuery(
    ['queryArticles', q, page],
    () =>
      fetchArticlesByQuery({
        fq: 'document_type:("article")',
        fl: ['_id', 'document_type', 'headline'],
        q,
        page,
      }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      enabled: !!q,
      retry: 2,
    }
  )
