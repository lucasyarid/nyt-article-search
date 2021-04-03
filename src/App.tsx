import React, { FC, Fragment } from 'react'
import { GlobalStyle } from './GlobalStyle'
import logo from './logo.svg'
import { Title } from './styledComponentExample'

const App: FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title>Test Styled Components</Title>
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
