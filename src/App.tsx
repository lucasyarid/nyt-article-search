import React, { FC, Fragment } from 'react'
import { GlobalStyles } from './Base/styles/GlobalStyles'

const App: FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Fragment>
  )
}

export default App
