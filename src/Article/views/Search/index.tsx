import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'

import { Dialog } from 'DesignSystem/atoms'
import { InputSearch } from 'DesignSystem/organisms'
import { CenteredTemplate } from 'DesignSystem/templates'
import { fetchArticlesByQuery } from 'Article/api'

export const Wrapper = styled.div`
  width: 750px;
`

const resultList = ['title 1', 'title 2', 'title 3', 'title 4']

export const SearchView: FC = () => {
  const history = useHistory()
  const location = useLocation()

  const [selected, setSelected] = useState(0)
  const [hasError, setHasError] = useState(false)

  const queryFromUrl = new URLSearchParams(location.search).get('q') as string
  const pageFromUrl = new URLSearchParams(location.search).get('page') as string

  const setUrlParam = (paramKey: string, paramValue: string) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set(paramKey, paramValue)
    history.push({
      search: searchParams.toString(),
    })
  }

  const onDebounced = (query: string) => {
    setUrlParam('q', query)
    fetchData(query)
  }

  const fetchData = async (query?: string, page?: string) => {
    const data = await fetchArticlesByQuery({
      fq: 'document_type:("article")',
      fl: ['_id', 'document_type', 'headline'],
      q: query || queryFromUrl,
      page: page || pageFromUrl,
    })
    console.log({ data })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onClickNext = () => {
    const pageFromUrlNumber = Number(pageFromUrl) || 0
    const nextPage = (pageFromUrlNumber + 1).toString()

    setUrlParam('page', nextPage)
    fetchData(undefined, nextPage)
  }

  const onClickPrevious = () => {
    const pageFromUrlNumber = Number(pageFromUrl)
    if (!pageFromUrlNumber) return
    const nextPage = (pageFromUrlNumber - 1).toString()

    setUrlParam('page', nextPage)
    fetchData(undefined, nextPage)
  }

  const onClose = () => setHasError(false)

  const headToArticle = () => console.log(selected)

  return (
    <CenteredTemplate backgroundSrc="https://www.nytimes.com/images/2021/02/19/books/review/Fajardo-Anstine2/Fajardo-Anstine2-videoSixteenByNine3000.jpg">
      <Wrapper>
        <InputSearch
          isLoading={false}
          name="search"
          placeholder="Search New York Times articles"
          onDebounced={onDebounced}
          resultList={resultList}
          value={queryFromUrl || ''}
          delay={300}
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
        title="title"
        content="content"
        onClose={onClose}
      />
    </CenteredTemplate>
  )
}
