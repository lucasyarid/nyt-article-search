import React, { FC, Fragment, useState } from 'react'
import { GlobalStyles } from 'Base/styles/GlobalStyles'

import { Dialog, Image } from 'DesignSystem/atoms'
import { InputSearch } from 'DesignSystem/organisms'

const resultList = ['title 1', 'title 2', 'title 3', 'title 4']

const App: FC = () => {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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
      <Image src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
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
