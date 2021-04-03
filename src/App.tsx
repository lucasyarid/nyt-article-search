import React, { FC, Fragment, useState } from 'react'
import { GlobalStyles } from './Base/styles/GlobalStyles'

import Icon from 'DesignSystem/quarks/Icon'
import { Input } from 'DesignSystem/atoms/Input'

const App: FC = () => {
  const [search, setSearch] = useState('')

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)

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
          <Input
            name="search"
            label="Search for Articles"
            placeholder="search"
            icon={Icon.MagnifyingGlass}
            value={search}
            onChange={searchHandler}
          />
          {search}
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
