import React, { FC, Fragment } from 'react'

import { Dialog, Navigation } from 'DesignSystem/atoms'
import { InputSearch } from 'DesignSystem/organisms'
import { CenteredTemplate } from 'DesignSystem/templates'
import { useQueryArticles } from 'app/Article/hooks'
import { useQueryString } from 'Base/router'
import { ArticleSlideshow } from './components/ArticleSlideshow'

export const SearchView: FC = () => {
  const [{ q, page }, setQuery] = useQueryString()

  const { data, isLoading, isError } = useQueryArticles(q, page)

  const onDebounced = (query: string) => setQuery({ q: query, page: '0' })
  const resetQuery = () => setQuery({ q: '', page: '0' })
  const onClickNext = () => setQuery({ q, page: (Number(page) + 1).toString() })

  const onClickPrevious = () => {
    if (!Number(page)) return
    setQuery({ q, page:(Number(page) - 1).toString() })
  }

  const resultList =
    data?.response?.docs.map((doc) => ({
      url: `/article/${encodeURIComponent(doc._id)}`,
      label: doc.headline.main,
    })) || []

  return (
    <Fragment>
      <CenteredTemplate>
        <InputSearch
          isLoading={isLoading}
          name="search"
          placeholder="Search New York Times articles"
          onDebounced={onDebounced}
          resultList={resultList}
          value={q || ''}
          delay={500}
        />

        {resultList.length && !!q ? (
          <Navigation
            isFirstPage={!Number(page)}
            isLastPage={false}
            onClickNext={onClickNext}
            onClickPrevious={onClickPrevious}
          />
        ) : null}

        <Dialog
          isVisible={isError}
          title="Sorry for that"
          content="Seems like something went wrong when trying to search articles"
          onClose={resetQuery}
        />
      </CenteredTemplate>

      <ArticleSlideshow />
    </Fragment>
  )
}
