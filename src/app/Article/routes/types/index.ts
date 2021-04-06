export interface ArticleIdParam {
  articleId: string
}

export enum ArticleRoute {
  SEARCH = '/',
  INNER = '/article/:articleId',
}
