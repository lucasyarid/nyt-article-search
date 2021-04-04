import React, { FC, Fragment, useState } from 'react'
import { GlobalStyles } from 'Base/styles/GlobalStyles'

import { Dialog } from 'DesignSystem/atoms'
import { InputSearch } from 'DesignSystem/organisms'

const resultList = ['title 1', 'title 2', 'title 3', 'title 4']

const App: FC = () => {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const onDebounced = (e: string) => setSearch(e)

  const onClickNext = () => console.log('onClickNext')
  const onClickPrevious = () => console.log('onClickPrevious')

  const onClose = () => setIsVisible(false)

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
      <Dialog
        isVisible={isVisible}
        title="title"
        content="content"
        onClose={onClose}
      />
    </Fragment>
  )
}

export default App
