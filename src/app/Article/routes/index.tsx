import React, { FC, Fragment } from 'react'
import { Route } from 'react-router-dom'

import { SearchView, InnerView } from 'app/Article/views'
import { ArticleRoute } from './types'

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
