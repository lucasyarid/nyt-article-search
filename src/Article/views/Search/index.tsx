import React, { FC, useEffect, useState } from 'react'

import styled from 'styled-components'

import { Dialog } from 'DesignSystem/atoms'
import { InputSearch } from 'DesignSystem/organisms'
import { CenteredTemplate } from 'DesignSystem/templates'
import { fetchArticlesByQuery } from 'Article/api'

export const Wrapper = styled.div`
  width: 750px;
`

const resultList = ['title 1', 'title 2', 'title 3', 'title 4']

export const SearchView: FC = () => {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const onDebounced = (e: string) => setSearch(e)

  const onClickNext = () => console.log('onClickNext')
  const onClickPrevious = () => console.log('onClickPrevious')

  const onClose = () => setIsVisible(false)

  const fetchData = async () => {
    const data = await fetchArticlesByQuery({
      fq: 'document_type:("article")',
      fl: ['_id', 'document_type', 'headline'],
      q: 'Rupert Murdoch, Accepting Award, Condemns ‘Awful Woke Orthodoxy’',
    })
    console.log({ data })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <CenteredTemplate backgroundSrc="https://www.nytimes.com/images/2021/02/19/books/review/Fajardo-Anstine2/Fajardo-Anstine2-videoSixteenByNine3000.jpg">
      <Wrapper>
        <InputSearch
          isLoading={false}
          name="search articles"
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
      </Wrapper>
      <Dialog
        isVisible={isVisible}
        title="title"
        content="content"
        onClose={onClose}
      />
    </CenteredTemplate>
  )
}
