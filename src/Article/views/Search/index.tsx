import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Dialog } from 'DesignSystem/atoms'
import { InputSearch } from 'DesignSystem/organisms'
import { CenteredTemplate } from 'DesignSystem/templates'
import { useQueryArticles } from 'Article/hooks'
import { useUrlQuery } from 'Base/router'

export const Wrapper = styled.div`
  width: 750px;
`

export const SearchView: FC = () => {
  const { getQueryParamFromUrl, setUrlParam } = useUrlQuery()

  const pageFromUrl = getQueryParamFromUrl('page')
  const [page, setPage] = useState(Number(pageFromUrl))

  const queryFromUrl = getQueryParamFromUrl('query') || ''
  const [query, setQuery] = useState(queryFromUrl)

  const { data, isLoading, error } = useQueryArticles(query, page.toString())
  const [hasError, setHasError] = useState(false)
  console.log(data)
  if (error) setHasError(true)

  const [selected, setSelected] = useState(0)

  const onDebounced = (query: string) => {
    setUrlParam('q', query)
    setQuery(query)
  }

  const onClickNext = () =>
    setPage((page) => {
      const nextPage = page + 1
      setUrlParam('page', nextPage.toString())
      return nextPage
    })

  const onClickPrevious = () =>
    setPage((page) => {
      if (!page) return page
      const previousPage = page - 1

      setUrlParam('page', previousPage.toString())
      return previousPage
    })

  const onClose = () => setHasError(false)

  const headToArticle = () => console.log(selected)

  const resultList = query
    ? data?.response?.docs.map((doc) => doc.headline.main)
    : []

  return (
    <CenteredTemplate backgroundSrc="https://www.nytimes.com/images/2021/02/19/books/review/Fajardo-Anstine2/Fajardo-Anstine2-videoSixteenByNine3000.jpg">
      <Wrapper>
        <InputSearch
          isLoading={isLoading}
          name="search"
          placeholder="Search New York Times articles"
          onDebounced={onDebounced}
          resultList={resultList || []}
          value={queryFromUrl}
          delay={500}
          isFirstPage={!Number(pageFromUrl)}
          isLastPage={false}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          selected={selected}
          setSelected={setSelected}
          onClick={headToArticle}
          onEnter={headToArticle}
        />
      </Wrapper>
      <Dialog
        isVisible={hasError}
        title="Sorry for that"
        content="Seems like something went wrong on searching for articles"
        onClose={onClose}
      />
    </CenteredTemplate>
  )
}
