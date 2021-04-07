import React, { FC, Fragment } from 'react'

import { Slideshow } from 'DesignSystem/molecules'
import { useQueryArticlesMultimedia } from 'app/Article/hooks'
import { NYT_URL_IMG } from 'app/Article/api'
import { NYTArticle } from 'app/Article/api/nyt/types'
import { Dialog } from 'DesignSystem/atoms'

export const ArticleSlideshow: FC = () => {
  const { data, isError } = useQueryArticlesMultimedia()

  const reloadPage = () => location.reload()

  if (isError)
    return (
      <Dialog
        isVisible={isError}
        title="Sorry for that"
        content="Seems like there was a problem getting articles"
        onClose={reloadPage}
      />
    )

  const currentArticle = data?.response

  if (!currentArticle) return <Fragment />

  const list = currentArticle.docs.reduce(
    (docs: string[], doc: NYTArticle) =>
      doc.multimedia.length
        ? [NYT_URL_IMG(doc.multimedia[0].url), ...docs]
        : docs,
    []
  )

  return list.length ? <Slideshow list={list} /> : <Fragment />
}
