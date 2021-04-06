import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { ArticleRoutes } from 'app/Article/routes'
import { GlobalStyles } from 'Base/styles/GlobalStyles'

const queryClient = new QueryClient()

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <GlobalStyles />

      <div className="App">
        <Switch>
          <ArticleRoutes />
        </Switch>
      </div>
    </Router>
  </QueryClientProvider>
)

export default App
