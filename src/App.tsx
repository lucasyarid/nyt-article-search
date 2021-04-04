import React, { FC, Fragment, useState } from 'react'
import { GlobalStyles } from './Base/styles/GlobalStyles'

import { InputSearch } from 'DesignSystem/molecules'

const resultList = [
  {
    id: '1',
    title: 'title 1',
  },
  {
    id: '2',
    title: 'title 2',
  },
  {
    id: '3',
    title: 'title 3',
  },
  {
    id: '4',
    title: 'title 4',
  },
]

const App: FC = () => {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(0)

  const onDebounced = (e: string) => setSearch(e)

  const onClickNext = () => console.log('onClickNext')
  const onClickPrevious = () => console.log('onClickPrevious')

  return (
    <Fragment>
      <GlobalStyles />
      <div className="App dark">
        <header className="App-header">
          <InputSearch
            isLoading={false}
            name="search"
            label="Search for Articles"
            placeholder="search"
            onDebounced={onDebounced}
            resultList={resultList}
            value={search}
            delay={300}
            isFirstPage={false}
            isLastPage={false}
            onClickNext={onClickNext}
            onClickPrevious={onClickPrevious}
            selected={selected}
            setSelected={setSelected}
          />
        </header>
      </div>
    </Fragment>
  )
}

export default App
