import React, { FC, Fragment } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import {
  ImageContentTemplate,
  ImageContentLeft,
  ImageContentRight,
} from 'DesignSystem/templates'
import { Dialog, Image } from 'DesignSystem/atoms'
import { ArticleIdParam } from 'app/Article/routes/types'
import { useQueryArticleById } from 'app/Article/hooks'
import { NYT_URL_IMG } from 'app/Article/api'

export const InnerView: FC = () => {
  const { articleId } = useParams<ArticleIdParam>()
  const history = useHistory()

  const { data, isError, isLoading, isFetching } = useQueryArticleById(
    decodeURIComponent(articleId)
  )

  const currentArticle = data?.response.docs[0]

  const formatDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  }).format(currentArticle ? new Date(currentArticle.pub_date) : new Date())

  const goBack = () => history.goBack()

  if (isFetching) return <Fragment />

  if (!currentArticle)
    return (
      <Dialog
        isVisible={true}
        title="Sorry for that"
        content="Seems like something went wrong when trying to search articles"
        onClose={goBack}
      />
    )

  return (
    <ImageContentTemplate>
      <ImageContentLeft>
        <a href="#" onClick={goBack}>
          Go to results page
        </a>
        <h1>{currentArticle.headline.main}</h1>
        <time>{formatDate}</time>
        <p>{currentArticle.snippet}</p>
        <a target="_blank" href={currentArticle.web_url} rel="noreferrer">
          Read the full article
        </a>
      </ImageContentLeft>

      <ImageContentRight>
        {currentArticle?.multimedia.length ? (
          <Image src={NYT_URL_IMG(currentArticle?.multimedia[0].url)} />
        ) : null}
      </ImageContentRight>

      <Dialog
        isVisible={isError}
        title="Sorry for that"
        content="Seems like something went wrong when trying to search articles"
        onClose={goBack}
      />
    </ImageContentTemplate>
  )
}
