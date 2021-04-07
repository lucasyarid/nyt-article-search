import React, { FC, Fragment } from 'react'

import { Slideshow } from 'DesignSystem/molecules'
import { useQueryArticlesMultimedia } from 'app/Article/hooks'
import { NYT_URL_IMG } from 'app/Article/api'

export const ArticleSlideshow: FC = () => {
  const { data } = useQueryArticlesMultimedia()

  const list =
    data?.response.docs.map((doc) => NYT_URL_IMG(doc.multimedia[0].url)) || []

  return list.length ? <Slideshow list={list} /> : <Fragment />
}
