type FilterQuery = 'document_type:("article")' | 'news_desk:("Art")'
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
  fq?: FilterQuery
  fl?: LimitFields[]
  q?: string
  page?: string
}
