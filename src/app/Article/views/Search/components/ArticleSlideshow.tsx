import React, { FC, Fragment } from 'react'

import { Slideshow } from 'DesignSystem/molecules'
import { useQueryArticlesMultimedia } from 'app/Article/hooks'
import { NYT_URL_IMG } from 'app/Article/api'
import { NYTArticle } from 'app/Article/api/nyt/types'

export const ArticleSlideshow: FC = () => {
  const { data } = useQueryArticlesMultimedia()

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
