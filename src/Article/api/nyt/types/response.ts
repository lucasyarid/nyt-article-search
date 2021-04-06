interface NYTMeta {
  hits: number
  offset: number
  time: number
}

interface NYTHeadline {
  main: string
}

interface NYTMultimedia {
  url: string
}

interface NYTArticle {
  _id: string
  web_url: string
  headline: NYTHeadline
  pub_date: string
  document_type: string
  snippet?: string
  multimedia: NYTMultimedia[]
}

interface NYTSearch {
  meta: NYTMeta
  docs: NYTArticle[]
}

export interface NYTBaseResponse {
  status: string
  copyright: string
  response: NYTSearch
}
