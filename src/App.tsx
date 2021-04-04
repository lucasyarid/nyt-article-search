import React, { FC } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { ArticleRoutes } from 'Article/routes'
import { GlobalStyles } from 'Base/styles/GlobalStyles'

const App: FC = () => (
  <Router>
    <GlobalStyles />

    <Switch>
      <ArticleRoutes />
    </Switch>
  </Router>
)

export default App
