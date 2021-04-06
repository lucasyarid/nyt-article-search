type LimitFields =
  | 'web_url'
  | 'snippet'
  | 'print_page'
  | 'source'
  | 'multimedia'
  | 'headline'
  | 'keywords'
  | 'pub_date'
  | 'document_type'
  | 'news_desk'
  | 'byline'
  | 'type_of_material'
  | '_id'
  | 'word_count'
  | 'score'
  | 'uri'

export interface NYTSearchParams {
  fl?: LimitFields[]
  fq?: string
  q?: string
  page?: string
}
