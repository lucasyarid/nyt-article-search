import React, { FC, Fragment } from 'react'
import { Route } from 'react-router-dom'

import { SearchView, InnerView } from 'Article/views'

export enum ArticleRoute {
  SEARCH = '/',
  INNER = '/article/:articleId',
}

export const ArticleRoutes: FC = () => (
  <Fragment>
    <Route exact path={ArticleRoute.SEARCH}>
      <SearchView />
    </Route>
    <Route exact path={ArticleRoute.INNER}>
      <InnerView />
    </Route>
  </Fragment>
)
