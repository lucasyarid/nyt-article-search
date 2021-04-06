import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Dialog, Navigation } from 'DesignSystem/atoms'
import { InputSearch } from 'DesignSystem/organisms'
import { CenteredTemplate } from 'DesignSystem/templates'
import { useQueryArticles } from 'Article/hooks'
import { useQueryString } from 'Base/router'

export const Wrapper = styled.div`
  width: 750px;
`

export const SearchView: FC = () => {
  const [page, setPage] = useQueryString('page')
  const [query, setQuery] = useQueryString('q')
  const [selected, setSelected] = useState(0)

  const { data, isLoading, isError } = useQueryArticles(query, page.toString())

  const onDebounced = (query: string) => {
    setPage('0')
    setQuery(query)
  }

  const resetQuery = () => {
    setPage('0')
    setQuery('')
  }

  const onClickNext = () => setPage((Number(page) + 1).toString())

  const onClickPrevious = () => {
    if (!Number(page)) return
    setPage((Number(page) - 1).toString())
  }

  const headToArticle = () => console.log(selected)

  const resultList = data?.response?.docs.map((doc) => doc.headline.main) || []

  return (
    <CenteredTemplate backgroundSrc="https://www.nytimes.com/images/2021/02/19/books/review/Fajardo-Anstine2/Fajardo-Anstine2-videoSixteenByNine3000.jpg">
      <Wrapper>
        <InputSearch
          isLoading={isLoading}
          name="search"
          placeholder="Search New York Times articles"
          onDebounced={onDebounced}
          resultList={resultList}
          value={query}
          delay={500}
          selected={selected}
          setSelected={setSelected}
          onClick={headToArticle}
          onEnter={headToArticle}
        />

        {resultList.length ? (
          <Navigation
            isFirstPage={!Number(page)}
            isLastPage={false}
            onClickNext={onClickNext}
            onClickPrevious={onClickPrevious}
          />
        ) : null}
      </Wrapper>
      <Dialog
        isVisible={isError}
        title="Sorry for that"
        content="Seems like something went wrong when trying to search articles"
        onClose={resetQuery}
      />
    </CenteredTemplate>
  )
}
