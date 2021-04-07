import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import { GlobalStyles } from 'Base/styles/GlobalStyles'
import { NotFound } from 'DesignSystem/templates'

import { SearchView, InnerView } from 'app/Article/views'
import { ArticleRoute } from 'app/Article/routes'

const queryClient = new QueryClient()

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <GlobalStyles />

      <div className="App">
        <Switch>
          <Route exact path={ArticleRoute.SEARCH} component={SearchView} />
          <Route exact path={ArticleRoute.INNER} component={InnerView} />

          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  </QueryClientProvider>
)

export default App
